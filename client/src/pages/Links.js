import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

export default class Links extends Component {
  state = {
    links: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/links').then(response => {
      this.setState({ links: response.data })
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <ul className="nav nav-tabs d-flex">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              DEV. TOOL
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/career">
              JOBS
            </a>
          </li>
          <Link className="btn btn-secondary mr-4" to="/links/upload">
            Upload
          </Link>
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
                  <td
                    className="btn btn-outline-danger"
                    data-dismiss="modal"
                    type="button"
                    id="del"
                  >
                    <a href="/link">
                      <i className="fas fa-trash-alt" />
                    </a>
                  </td>
                  <td
                    className="btn btn-outline-warning"
                    data-dismiss="modal"
                    type="button"
                    id="edit"
                  >
                    <a href={`/edit/${index}`}>
                      <i className="fas fa-cut" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}
