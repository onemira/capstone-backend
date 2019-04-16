import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Lightbox from 'react-lightbox-component'
import Jumbotron from '../components/Jumbotron'
import auth from '../components/auth'

export default class Image extends Component {
  state = {
    images: [],
    search: ''
  }

  loadImages = () => {
    axios.get('/api/images').then(response => {
      this.setState({
        images: response.data.map(img => {
          return { ...img, src: img.url }
        })
      })
    })
  }

  componentDidMount() {
    this.loadImages()
  }

  onSearch = event => {
    this.setState({ search: event.target.value }, () => {
      axios.get(`/api/images?search=${this.state.search}`).then(response => {
        this.setState({ images: response.data })
      })
    })
  }

  deleteImage = id => {
    axios.delete(`/api/images/${id}`).then(response => {
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
          type="button"
          onClick={() => this.deleteImage(image.id)}
        >
          <i className="fas fa-trash-alt" />
        </button>
        <button className="btn btn-light btn-outline-success image-edit-btn">
          <Link to={`/images/edit/${image.id}`}>
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
        <form className="form-inline my-2 my-lg-2 mt-3">
          <input
            className="ml-3 width-70%"
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
            <Link className="btn btn-dark width-200px mr-1" to="/images/upload">
              Upload
            </Link>
          )}
        </form>

        <main>
          <section className="container album py-5">
            <h4 className="border-bottom mb-5 text-center p-2">
              if(sad() === true)&#123;spread.stop(); beHappy()&#125;
              <span role="img" aria-label="smile">
                😆
              </span>
            </h4>

            <div className="row image-lightbox mx-auto">
              <Lightbox
                // className="mx-auto"
                showImageModifiers={true}
                key={this.state.images}
                images={this.state.images}
                renderImageFunc={(
                  index,
                  image,
                  toggleLightbox,
                  width,
                  height
                ) => {
                  // console.log({ image, toggleLightbox, index })
                  return (
                    <div key={index} className="d-flex flex-column">
                      <img
                        src={image.url}
                        className="rounded"
                        border="dark"
                        style={{
                          width: '300px',
                          height: '300px'
                        }}
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
