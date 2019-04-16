import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import auth from './components/auth'
import history from './components/history'
import Navbar from './components/Navbar'
import UploadVideo from './components/UploadVideo'
import UploadLink from './components/UploadLink'
import UploadImage from './components/UploadImage'
import EditVideo from './components/EditVideo'
import EditImage from './components/EditImage'
import EditLink from './components/EditLink'
import LinksCareer from './components/LinksCareer'

import MainPage from './pages/MainPage'
import Video from './pages/Video'
import Image from './pages/Image'
import Links from './pages/Links'
// import Code from './pages/Code'
// import Article from './pages/Article'
// import File from './pages/File'
// import Meetup from './pages/Meetup'

class App extends Component {
  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
  }

  render() {
    return (
      <>
        <Router history={history}>
          <Navbar />
          <Switch>
            <Route path="/login" render={() => auth.login()} />
            <Route
              path="/logout"
              render={() => {
                auth.logout()
                return <></>
              }}
            />
            <Route
              path="/callback"
              render={() => {
                auth.handleAuthentication(() => {
                  axios.defaults.headers.common = {
                    Authorization: auth.authorizationHeader()
                  }
                })
                return <></>
              }}
            />

            <Route exact path="/" component={MainPage} />
            <Route exact path="/videos/upload" component={UploadVideo} />
            <Route exact path="/links/upload" component={UploadLink} />
            <Route exact path="/images/upload" component={UploadImage} />
            <Route exact path="/videos/edit/:id" component={EditVideo} />
            <Route exact path="/images/edit/:id" component={EditImage} />
            <Route exact path="/links/edit/:id" component={EditLink} />
            <Route exact path="/link/career" component={LinksCareer} />
            <Route exact path="/link" component={Links} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/image" component={Image} />
            {/* <Route exact path="/file" component={File} />
            <Route exact path="/article" component={Article} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/meetup" component={Meetup} /> */}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
