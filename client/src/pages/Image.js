import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Lightbox from 'react-lightbox-component'
import Jumbotron from '../components/Jumbotron'
import auth from '../components/auth'
import moment from 'moment'

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
          className="btn btn-outline-danger"
          type="button"
          onClick={() => this.deleteImage(image.id)}
        >
          <i className="fas fa-trash-alt" />
        </button>
        <button className="btn btn-outline-success edit-btn">
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
        <form className="form-inline">
          <input
            className="search mr-sm-2 ml-3"
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
            <Link className="btn btn-dark" to="/images/upload">
              Upload
            </Link>
          )}
        </form>

        <section className="container ">
          <h4 className="border-bottom mt-5 mb-5 text-center p-3">
            if(sad() === true)&#123;spread.stop(); beHappy()&#125;
            <span role="img" aria-label="smile">
              😆
            </span>
          </h4>

          <div className="row image-lightbox">
            <Lightbox
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
                return (
                  <div
                    key={index}
                    className="card mb-4 shadow-sm mr-md-2 ml-md-2"
                  >
                    <img
                      src={image.url}
                      className="rounded embed-responsive-item"
                      border="dark"
                      style={{
                        width: '320px',
                        height: '320px'
                      }}
                      onClick={toggleLightbox.bind(null, index)}
                      alt="img"
                    />

                    <div className="card-body ml-3">
                      <div>
                        <h5 className="card-title">{image.description}</h5>
                      </div>
                      <p className="card-text m-0">{image.user_name}</p>
                      <p className="d-flex justify-content-between align-items-center m-0 mr-1">
                        <small className="text-muted mb-3">
                          {moment(image.created_at).format('lll')}
                        </small>
                        <p>{this.buttons(image)}</p>
                      </p>
                    </div>
                  </div>
                )
              }}
            />
          </div>
        </section>
      </>
    )
  }
}
