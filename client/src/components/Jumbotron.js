import React, { Component } from 'react'
import logo from '../images/logo_cut.png'

export default class jumbotron extends Component {
  render() {
    return (
      <>
        <section className="jumbotron text-center">
          <div className="container">
            {/* <h1 className="jumbotron-heading text-danger"> Devvit </h1> */}
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
