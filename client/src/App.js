import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import auth from './components/auth'
import history from './components/history'
import axios from 'axios'

import MainPage from './pages/MainPage'
import Upload from './components/Upload'
import UploadLink from './components/UploadLink'
import UploadImage from './components/UploadImage'
import Edit from './components/Edit'
import EditImage from './components/EditImage'
import EditLink from './components/EditLink'

import Youtube from './pages/Youtube'
import Image from './pages/Image'
import Links from './pages/Links'
import Code from './pages/Code'
import Article from './pages/Article'
import File from './pages/File'
import Contact from './pages/Contact'
import Meetup from './pages/Meetup'

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
            <Route exact path="/videos/upload" component={Upload} />
            <Route exact path="/links/upload" component={UploadLink} />
            <Route exact path="/images/upload" component={UploadImage} />
            <Route exact path="/videos/edit/:id" component={Edit} />
            <Route exact path="/images/edit/:id" component={EditImage} />
            <Route exact path="/links/edit/:id" component={EditLink} />
            <Route exact path="/link" component={Links} />
            <Route exact path="/video" component={Youtube} />
            <Route exact path="/image" component={Image} />
            <Route exact path="/file" component={File} />
            <Route exact path="/article" component={Article} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/meetup" component={Meetup} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
