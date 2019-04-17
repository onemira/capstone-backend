import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Jumbotron from '../components/Jumbotron'
import auth from '../components/auth'
import moment from 'moment'

class Video extends Component {
  state = {
    videos: [],
    search: ''
  }

  loadVideos = () => {
    axios.get('/api/videos').then(response => {
      this.setState({ videos: response.data })
    })
  }

  componentDidMount() {
    this.loadVideos()
  }

  onSearch = event => {
    this.setState({ search: event.target.value }, () => {
      axios.get(`/api/videos?search=${this.state.search}`).then(response => {
        this.setState({ videos: response.data })
      })
    })
  }

  deleteVideo = id => {
    axios.delete(`/api/videos/${id}`).then(response => {
      this.loadVideos()
    })
  }

  buttons = video => {
    if (!video.owned) {
      return
    }

    return (
      <>
        <button
          className="btn btn-outline-danger"
          onClick={() => this.deleteVideo(video.id)}
        >
          <i className="fas fa-trash-alt" />
        </button>
        <button className="btn btn-outline-success edit-btn">
          <Link to={`/videos/edit/${video.id}`}>
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
        <form className="form-inline mb-3">
          <input
            className="search mr-sm-2 ml-3"
            type="text"
            value={this.state.search}
            onChange={this.onSearch}
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 ml-1 mr-1"
            onClick={this.onSearch}
          >
            Search
          </button>
          {auth.isAuthenticated() && (
            <Link className="btn btn-dark" to="/videos/upload">
              Upload
            </Link>
          )}
        </form>

        <div className="container">
          <div className="row">
            {this.state.videos.map(video => (
              <div
                key={video.id}
                className="video-testimonial-block col-md-6 mb-4"
              >
                <div className="card mb-4 shadow-sm">
                  <div className="embed-responsive embed-responsive-16by9 video p-3">
                    <iframe
                      className="rounded embed-responsive-item"
                      title="videos"
                      src={video.url}
                      description={video.description}
                      frameBorder="1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="card-body video-card">
                    <div>
                      <h5 className="card-title mb-2">{video.description}</h5>
                    </div>
                    <p className="card-text m-0">{video.user_name}</p>
                    <p className="d-flex justify-content-between align-items-center m-0">
                      <small className="text-muted">
                        {moment(video.created_at).format('lll')}
                      </small>
                      <p>{this.buttons(video)}</p>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Video
