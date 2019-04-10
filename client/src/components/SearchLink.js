import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Jumbotron from './Jumbotron'

export default class SearchLink extends Component {
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

  onSearchChange = event => {
    this.setState({ search: event.target.value }, () => {
      axios.get(`/api/links?search=${this.state.search}`).then(response => {
        this.loadLinks()
      })
    })
  }

  render() {
    return (
      <>
        <Jumbotron />
        <ul className="nav nav-tabs d-flex">
          <li className="nav-item">
            <Link to="/link" className="nav-link active">
              DEV. TOOL
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/career" className="nav-link disabled">
              JOBS
            </Link>
          </li> */}
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
                    <Link to="/link.url">{link.url}</Link>
                  </td>
                  <td>{link.user_id}</td>
                  <td>{link.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}
