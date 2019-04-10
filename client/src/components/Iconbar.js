import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Iconbar extends Component {
  render() {
    return (
      <>
        <div className="screen background-image">
          <ul className="icon">
            <Link to={'/link'}>
              <li className="link">
                <i className="fas fa-link" />
              </li>
            </Link>
            <Link to={'/video'}>
              <li className="youtube">
                <i className="fab fa-youtube-square" />
              </li>
            </Link>
            <Link to={'/image'}>
              <li className="image">
                <i className="far fa-image" />
              </li>
            </Link>
            <Link to={'/article'}>
              <li className="article">
                <i className="fab fa-medium" />
              </li>
            </Link>
            <Link to={'/code'}>
              <li className="coding">
                <i className="fas fa-code" />
              </li>
            </Link>
            <Link to={'/meetup'}>
              <li className="meetup">
                <i className="fab fa-meetup" />
              </li>
            </Link>
            <Link to={'/file'}>
              <li className="file">
                <i className="fas fa-file" />
              </li>
            </Link>
          </ul>
        </div>
      </>
    )
  }
}
