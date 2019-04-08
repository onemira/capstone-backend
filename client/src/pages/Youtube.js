import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

class Youtube extends Component {
  state = {
    videos: [],
    video: {}
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/videos').then(response => {
      this.setState({ videos: response.data })
    })
  }

  deleteVideo = event => {
    axios
      .delete(`http://localhost:3000/api/videos/${this.state.video.id}`)
      .then(response => {
        this.props.history.push('/')
      })
  }

  render() {
    return (
      <>
        <Navbar />
        {/* <Iconbar /> */}
        {/* <Footer /> */}
        <Jumbotron />
        <Link className="btn btn-dark mx-auto width-200px" to="/videos/upload">
          {' '}
          Upload{' '}
        </Link>
        <div className="space-medium transparent-background">
          {this.state.videos.map(video => (
            <div className="video-testimonial-block videos">
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

              {/* ------delete & edit btn--- */}
              <div className="video-detail">
                {/* <p>{video.name}</p>
                <p>{video.description}</p> */}
                <div className="deleteVideo">
                  <button
                    className="btn btn-light btn-outline-danger video-delete-btn"
                    data-dismiss="modal"
                    type="button"
                    id="del"
                    onClick={this.deleteVideo}
                  >
                    <a href="/">
                      <i className="fas fa-trash-alt" />
                    </a>
                  </button>
                </div>
                <Link to="/videos/edit">
                  <button
                    className="btn btn-light btn-outline-warning video-edit-btn"
                    data-dismiss="modal"
                    type="button"
                    id="edit"
                    onClick={this.EditVideo}
                  >
                    <a href="/">
                      <i className="fas fa-cut" />
                    </a>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default Youtube
