import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Lightbox from 'react-lightbox-component'
import Jumbotron from '../components/Jumbotron'

export default class Image extends Component {
  state = {
    images: []
  }

  loadImages = () => {
    axios.get('http://localhost:3000/api/images').then(response => {
      this.setState({ images: response.data })
    })
  }

  componentDidMount() {
    this.loadImages()
  }

  deleteImage = id => {
    axios.delete(`http://localhost:3000/api/images/${id}`).then(response => {
      this.loadImages()
    })
  }

  buttons = image => {
    if (!image.owned) {
      return
    }

    return (
      <>
        <button
          className="btn btn-light btn-outline-danger image-delete-btn"
          data-dismiss="modal"
          type="button"
          id="del"
          onClick={() => this.deleteImage(image.id)}
        >
          <i className="fas fa-trash-alt" />
        </button>

        <Link
          to={`/images/edit/${image.id}`}
          className="btn btn-light btn-outline-warning image-edit-btn"
          data-dismiss="modal"
          type="button"
          id="edit"
        >
          <i className="fas fa-edit" />
        </Link>
      </>
    )
  }

  render() {
    return (
      <>
        <Jumbotron />
        <Link className="btn btn-warning mr-5" to="/images/upload">
          Upload
        </Link>

        <main>
          <section className="album py-5 bg-light center dp-flex justify-content-md-center">
            <div className="row">
              <div className="col-lg-12 text-center my-2">
                <h4 className="border-bottom border-dark p-2">
                  Let Your Sadness Comment Out!
                  <span role="img" aria-label="smile">
                    😆
                  </span>
                  <pre>
                    if(sad() === true)&#123;spread.stop(); beHappy()&#125;
                  </pre>
                </h4>
              </div>
            </div>

            <div className="row image-lightbox mx-auto">
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
                    <div key={index} className="d-flex flex-column">
                      <img
                        src={image.url}
                        className="rounded"
                        border="dark"
                        style={{ width: '350px', height: '350px' }}
                        onClick={toggleLightbox.bind(null, index)}
                        alt="img"
                      />
                      {this.buttons(image)}
                    </div>
                  )
                }}
              />
            </div>
          </section>
        </main>
      </>
    )
  }
}
