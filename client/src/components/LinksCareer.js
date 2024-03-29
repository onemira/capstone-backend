import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Jumbotron from './Jumbotron'
import auth from './auth'
import moment from 'moment'

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
          onClick={() => this.deleteLink(link.id)}
        >
          <i className="fas fa-trash-alt" />
        </button>
        <button className="btn btn-outline-success edit-btn">
          <Link to={`/links/edit/${link.id}`}>
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
            <Link to="/link/career" className="nav-link active">
              JOBS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/link" className="nav-link">
              Links
            </Link>
          </li>
          <form className="form-inline ">
            <input
              className="ml-3"
              type="text"
              value={this.state.search}
              onChange={this.onSearch}
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 ml-1 mr-1"
              type="button"
              id="search"
              onClick={this.onSearch}
            >
              Search
            </button>
            {auth.isAuthenticated() && (
              <Link
                className="btn btn-dark width-200px mr-1"
                to="/links/upload"
              >
                Upload
              </Link>
            )}
          </form>
        </ul>

        <div className="table-responsive link-table">
          <table className="table table-hover">
            <thead>
              <tr className="thead-light">
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
                  <td>{link.title}</td>
                  <td>{link.description}</td>
                  <td>
                    <a href={link.url}>{link.url}</a>
                  </td>
                  <td>{link.user_name}</td>
                  <td>{moment(link.created_at).calendar()}</td>
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
