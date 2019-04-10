import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo_cut.png'
import auth from '../components/auth'

class Navbar extends Component {
  render() {
    return (
      <>
        <main className="navbar-dropdown">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
              <img src={logo} className="logo" alt="logo" />
            </Link>
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
                  <Link to={'/'} className="nav-link d-flex flex-column">
                    <i className="fa fa-home fa-2x d-none d-lg-block" />
                    Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/link" className="nav-link d-flex flex-column">
                    <i className="fa fa-link fa-2x d-none d-lg-block">
                      {/* <span className="badge badge-danger fa-4">11</span> */}
                    </i>
                    Link
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/video" className="nav-link d-flex flex-column">
                    <i className="fab fa-youtube fa-2x d-none d-lg-block">
                      {/* <span className="badge badge-warning">11</span> */}
                    </i>
                    Video
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/image" className="nav-link d-flex flex-column">
                    <i className="fa fa-image fa-2x d-none d-lg-block">
                      {/* <span className="badge badge-primary">11</span> */}
                    </i>
                    Image
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/article" className="nav-link d-flex flex-column">
                    <i className="fab fa-medium fa-2x d-none d-lg-block">
                      {/* <span className="badge badge-secondary">11</span> */}
                    </i>
                    Article
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/code" className="nav-link d-flex flex-column">
                    <i className="fa fa-code fa-2x d-none d-lg-block">
                      {/* <span className="badge badge-info">11</span> */}
                    </i>
                    Code
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/meetup" className="nav-link d-flex flex-column">
                    <i className="fab fa-meetup fa-2x d-none d-lg-block">
                      {/* <span className="badge badge-light">11</span> */}
                    </i>
                    Meetup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/file" className="nav-link d-flex flex-column">
                    <i className="fa fa-file fa-2x d-none d-lg-block">
                      {/* <span className="badge badge-success">11</span> */}
                    </i>
                    File
                  </Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-2">
                {/* <input
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
                </Link> */}
                {/* <button
                  className="btn btn-outline-success my-2 my-sm-0 ml-1 mr-1 mt-3"
                  type="submit"
                >
                  <Link to href="/Upload">Upload</Link>
                </button> */}
                {auth.isAuthenticated() && (
                  <Link to="/logout" className="btn btn-primary ml-1">
                    Log Out
                  </Link>
                )}
                {!auth.isAuthenticated() && (
                  <Link to="/login" className="btn btn-primary ml-1">
                    Log In
                  </Link>
                )}
              </form>
            </div>
          </nav>
        </main>
      </>
    )
  }
}

export default Navbar
