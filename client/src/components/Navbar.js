import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import logo from '../images/logo_cut.png'

class Navbar extends Component {
  render() {
    return (
      <>
        <main className="navbar-dropdown">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              <img src={logo} className="logo" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link d-flex flex-column" href="/">
                    <i className="fa fa-home fa-2x" />
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex flex-column" href="/link">
                    <i className="fa fa-link fa-2x">
                      {/* <span className="badge badge-danger fa-1">11</span> */}
                    </i>
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex flex-column" href="/video">
                    <i className="fab fa-youtube fa-2x">
                      {/* <span className="badge badge-warning">11</span> */}
                    </i>
                    Video
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex flex-column" href="/image">
                    <i className="fa fa-image fa-2x">
                      {/* <span className="badge badge-primary">11</span> */}
                    </i>
                    Image
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex flex-column" href="/article">
                    <i className="fab fa-medium fa-2x">
                      {/* <span className="badge badge-secondary">11</span> */}
                    </i>
                    Article
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex flex-column" href="/code">
                    <i className="fa fa-code fa-2x">
                      {/* <span className="badge badge-info">11</span> */}
                    </i>
                    Code
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex flex-column" href="/meetup">
                    <i className="fab fa-meetup fa-2x">
                      {/* <span className="badge badge-light">11</span> */}
                    </i>
                    Meetup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex flex-column" href="/file">
                    <i className="fa fa-file fa-2x">
                      {/* <span className="badge badge-success">11</span> */}
                    </i>
                    File
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-2">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  // value={this.state.search}
                  // onChange={this.onSearchChange}
                />
                <Link
                  to={'/links/search'}
                  className="btn btn-outline-success my-2 my-sm-0 mt-3"
                  type="button"
                  id="search"
                >
                  Search
                </Link>
                {/* <button
                  className="btn btn-outline-success my-2 my-sm-0 ml-1 mr-1 mt-3"
                  type="submit"
                >
                  <a href="/Upload">Upload</a>
                </button> */}
                <Link to="/login" className="btn btn-primary ml-1">
                  Log in
                </Link>
              </form>
            </div>
          </nav>
        </main>
      </>
    )
  }
}

export default Navbar
