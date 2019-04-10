import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Jumbotron from '../components/Jumbotron'

export default class Links extends Component {
  state = {
    links: [],
    search: ''
  }

  loadLinks = () => {
    axios.get('/api/links').then(response => {
      this.setState({ links: response.data })
    })
  }

  componentDidMount = () => {
    this.loadLinks()
  }

  onSearch = event => {
    this.setState({ search: event.target.value }, () => {
      axios.get(`/api/links?search=${this.state.search}`).then(response => {
        this.setState({ links: response.data })
      })
    })
  }

  deleteLink = id => {
    axios.delete(`/api/links/${id}`).then(response => {
      this.loadLinks()
    })
  }

  buttons = link => {
    if (!link.owned) {
      return
    }

    return (
      <>
        <button
          className="btn btn-outline-danger"
          data-dismiss="modal"
          type="button"
          id="del"
          onClick={() => this.deleteLink(link.id)}
        >
          <i className="fas fa-trash-alt" />
        </button>
        <button className="btn btn-light btn-outline-success">
          <Link
            to={`/links/edit/${link.id}`}
            data-dismiss="modal"
            // type="button"
            id="edit"
          >
            <i className="fas fa-edit" />
          </Link>
        </button>
      </>
    )
  }

  render() {
    return (
      <>
        <Jumbotron />
        <ul className="nav nav-tabs d-flex">
          <li className="nav-item">
            <a className="nav-link active" href="/link">
              DEV. TOOL
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/career">
              JOBS
            </a>
          </li>
          <form className="form-inline my-2 my-lg-2">
            <input
              className="ml-3"
              type="text"
              value={this.state.search}
              onChange={this.onSearch}
              placeholder="Search..."
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 ml-1 mr-1"
              type="button"
              id="search"
              onClick={this.onSearch}
            >
              Search
            </button>
            <Link className="btn btn-secondary mr-1" to="/links/upload">
              Upload
            </Link>
          </form>
        </ul>

        <div className="table-responsive table-hover link-table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Link</th>
                <th scope="col">User</th>
                <th scope="col">Created at</th>
                <th scope="col" />
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {this.state.links.map((link, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{link.title}</td>
                  <td>{link.description}</td>
                  <td>
                    <a href={link.url}>{link.url}</a>
                  </td>
                  <td>{link.user_id}</td>
                  <td>{link.created_at}</td>
                  {this.buttons(link)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}
