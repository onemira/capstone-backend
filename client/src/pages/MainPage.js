import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Iconbar from '../components/Iconbar'
import Footer from '../components/Footer'
// import Upload from './Upload'
// import { Link } from 'react-router-dom'

class MainPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Iconbar />
        <Footer />
        {/* <Upload /> */}
      </>
    )
  }
}

export default MainPage
