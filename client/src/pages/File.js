import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'

class File extends Component {
  render() {
    return (
      <>
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form method="post" action="#" id="#">
                <div className="form-group files">
                  <label>Upload Your File </label>
                  <input type="file" className="form-control" multiple="" />
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <form method="post" action="#" id="#">
                <div className="form-group files color">
                  <label>Upload Your File </label>
                  <input type="file" className="form-control" multiple="" />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <Pagination /> */}
      </>
    )
  }
}

export default File
