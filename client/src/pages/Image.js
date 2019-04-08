import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

// import Footer from '../components/Footer'
import Lightbox from 'react-lightbox-component'
import Jumbotron from '../components/Jumbotron'

export default class Image extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/images').then(response => {
      this.setState({ images: response.data })
    })
  }

  render() {
    return (
      <>
        <Navbar />
        {/* <Footer /> */}
        <Jumbotron />

        {/* <main role="main"> */}
        <section className="album py-5 bg-light center dp-flex justify-content-md-center">
          <div className="row">
            <div className="col-lg-12 text-center my-2">
              <h4 className="border-bottom border-dark p-2">
                <Link className="btn btn-warning mr-5" to="/images/upload">
                  {' '}
                  Upload{' '}
                </Link>
                Let Your Sadness Comment Out!
                <span role="img" aria-label="smile">
                  😆
                </span>
                {/* <pre><code>
                    if(sad() === true){spread.stop(); beHappy();}</code></pre> */}
              </h4>
            </div>
          </div>
          <div key={this.state.images} className="row image-lightbox mx-auto">
            <Lightbox
              key={this.state.images}
              images={this.state.images}
              renderImageFunc={(
                index,
                image,
                toggleLightbox,
                width,
                height
              ) => {
                return (
                  <>
                    <div className="d-flex flex-column">
                      <img
                        key={index}
                        src={image.url}
                        className="rounded"
                        // border="dark"
                        style={{ width: '350px', height: '350px' }}
                        onClick={toggleLightbox.bind(null, index)}
                        alt="img"
                      />
                      <button
                        className="btn btn-light btn-outline-danger image-delete-btn"
                        data-dismiss="modal"
                        type="button"
                        id="del"
                      >
                        <a href="/image">
                          <i className="fas fa-trash-alt" />
                        </a>
                      </button>
                      <button
                        className="btn btn-light btn-outline-warning image-edit-btn"
                        data-dismiss="modal"
                        type="button"
                        id="edit"
                      >
                        <a href={`/edit/${index}`}>
                          <i className="fas fa-cut" />
                        </a>
                      </button>
                    </div>
                  </>
                )
              }}
            />
          </div>
        </section>
        {/* </main> */}
        {/* <Pagination /> */}
      </>
    )
  }
}
