import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

class Youtube extends Component {
  state = {
    videos: []
  }

  loadVideos = () => {
    axios.get('http://localhost:3000/api/videos').then(response => {
      this.setState({ videos: response.data })
    })
  }

  componentDidMount() {
    this.loadVideos()
  }

  deleteVideo = id => {
    axios.delete(`http://localhost:3000/api/videos/${id}`).then(response => {
      this.loadVideos()
    })
  }

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />

        <Link className="btn btn-dark mx-auto width-200px" to="/videos/upload">
          Upload
        </Link>

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

              {/* ------delete & edit btn--- */}
              <div className="video-detail">
                <div className="deleteVideo">
                  <button
                    className="btn btn-light btn-outline-danger video-delete-btn"
                    data-dismiss="modal"
                    type="button"
                    id="del"
                    onClick={() => this.deleteVideo(video.id)}
                  >
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
                <div>
                  <Link
                    to={`/videos/edit/${video.id}`}
                    className="btn btn-light btn-outline-warning video-edit-btn"
                    data-dismiss="modal"
                    type="button"
                    id="edit"
                  >
                    <i className="fas fa-edit" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default Youtube
