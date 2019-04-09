import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'
// import Iconbar from '../components/Iconbar'

export default class Image extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <Iconbar /> */}
        <Footer />

        <body cz-shortcut-listen="true">
          <header>
            {/* <div class="navbar navbar-dark bg-dark shadow-sm">
              <div class="container d-flex justify-content-between">
                <a href="#" class="navbar-brand d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    aria-hidden="true"
                    class="mr-2"
                    viewBox="0 0 24 24"
                    focusable="false"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <strong>Album</strong>
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarHeader"
                  aria-controls="navbarHeader"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon" />
                </button>
              </div>
            </div> */}
          </header>

          <main role="main">
            <section class="jumbotron text-center">
              <div class="container">
                <h1 class="jumbotron-heading">Album example</h1>
                <p class="lead text-muted">
                  Something short and leading about the collection below—its
                  contents, the creator, etc. Make it short and sweet, but not
                  too short so folks don’t simply skip over it entirely.
                </p>
                <p>
                  <a href="#" class="btn btn-primary my-2">
                    Main call to action
                  </a>
                  <a href="#" class="btn btn-secondary my-2">
                    Secondary action
                  </a>
                </p>
              </div>
            </section>

            <div class="album py-5 bg-light">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <img
                        src="https://files.slack.com/files-pri/T7HH5AJ56-FHEUD6EHL/655ab26acda49d933e8c8ecf429ab3367e7811bd61ea7d1ce1c3b46a6db78881_1.jpg.jpg"
                        className="card-img-top"
                        width="100%"
                        height="225"
                      />
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <img
                        src="https://files.slack.com/files-pri/T7HH5AJ56-FH540TF5J/img_0711.jpg"
                        className="card-img-top"
                        width="100%"
                        height="225"
                      />
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <svg
                        class="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                          Thumbnail
                        </text>
                      </svg>
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <svg
                        class="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                          Thumbnail
                        </text>
                      </svg>
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <svg
                        class="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                          Thumbnail
                        </text>
                      </svg>
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <svg
                        class="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                          Thumbnail
                        </text>
                      </svg>
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <svg
                        class="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                          Thumbnail
                        </text>
                      </svg>
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <svg
                        class="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                          Thumbnail
                        </text>
                      </svg>
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                      <svg
                        class="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                          Thumbnail
                        </text>
                      </svg>
                      <div class="card-body">
                        <p class="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small class="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </body>
        {/* <Pagination /> */}
      </>
    )
  }
}
