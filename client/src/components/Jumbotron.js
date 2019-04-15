import React, { Component } from 'react'
import logo from '../images/logo_cut.png'

export default class jumbotron extends Component {
  render() {
    return (
      <>
        <section className="jumbotron text-center">
          <div className="container">
            <img src={logo} className="logo" alt="logo" />
            <br />
            <br />
            <p className="lead text-light">
              Welcome Wizards! Devvit is a place to laugh, learn and share
              resources :D
            </p>
          </div>
        </section>
      </>
    )
  }
}
