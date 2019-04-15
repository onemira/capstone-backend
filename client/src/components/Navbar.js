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
                <li
                  className="nav-item active"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link to={'/'} className="nav-link d-flex flex-column">
                    <i className="fa fa-home fa-2x d-none d-lg-block" />
                    Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link to="/link" className="nav-link d-flex flex-column">
                    <i className="fa fa-link fa-2x d-none d-lg-block" />
                    Link
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link to="/video" className="nav-link d-flex flex-column">
                    <i className="fab fa-youtube fa-2x d-none d-lg-block" />
                    Video
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link to="/image" className="nav-link d-flex flex-column">
                    <i className="fa fa-image fa-2x d-none d-lg-block" />
                    Image
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link to="/article" className="nav-link d-flex flex-column">
                    <i className="fab fa-medium fa-2x d-none d-lg-block" />
                    Article
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link to="/code" className="nav-link d-flex flex-column">
                    <i className="fa fa-code fa-2x d-none d-lg-block" />
                    Code
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link to="/meetup" className="nav-link d-flex flex-column">
                    <i className="fab fa-meetup fa-2x d-none d-lg-block" />
                    Meetup
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link to="/file" className="nav-link d-flex flex-column">
                    <i className="fa fa-file fa-2x d-none d-lg-block" />
                    File
                  </Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-2">
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
