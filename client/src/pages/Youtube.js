import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Jumbotron from '../components/Jumbotron'

class Youtube extends Component {
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
        <div>
          <button
            className=" btn btn-outline-danger video-delete-btn"
            data-dismiss="modal"
            type="button"
            id="del"
            onClick={() => this.deleteVideo(video.id)}
          >
            <i className="fas fa-trash-alt" />
          </button>
          <button className="btn btn-outline-success">
            <Link
              to={`/videos/edit/${video.id}`}
              // className="video-edit-btn"
              data-dismiss="modal"
              // type="button"
              id="edit"
            >
              <i className="fas fa-edit" />
            </Link>
          </button>
        </div>
      </>
    )
  }

  render() {
    return (
      <>
        <Jumbotron />

        <form className="form-inline my-2 my-lg-2">
          <input
            className="ml-3"
            type="text"
            value={this.state.search}
            onChange={this.onSearch}
            placeholder="Search..."
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0  ml-1 mr-1"
            type="button"
            id="search"
            onClick={this.onSearch}
          >
            Search
          </button>
          <Link className="btn btn-dark width-200px mr-1" to="/videos/upload">
            Upload
          </Link>
        </form>

        <div className="space-medium transparent-background">
          {this.state.videos.map(video => (
            <div key={video.id} className="video-testimonial-block videos">
              <div className="embed-responsive embed-responsive-16by9 video">
                <iframe
                  className="embed-responsive-item"
                  title="videos"
                  src={video.url}
                  description={video.description}
                  frameBorder="1"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {this.buttons(video)}
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default Youtube
