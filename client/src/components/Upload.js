import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import Jumbotron from '../components/Jumbotron'

class Upload extends Component {
  onSubmit = form => {
    axios
      .post('/api/videos', {
        video: form.formData
      })
      .then(response => {
        console.log(response)
        this.props.history.push('/video')
      })
  }

  render() {
    const formSchema = {
      title: 'Video',
      type: 'object',
      required: ['url', 'description'],
      properties: {
        url: { type: 'string', title: 'Url', default: '' },
        description: { type: 'string', title: 'Description', default: '' }
      }
    }

    return (
      <>
        <Jumbotron />
        <div className="form-group row mt-3 ml-5 mr-1">
          <label for="inputName" className="col-sm-5 col-form-label">
            <Form schema={formSchema} onSubmit={this.onSubmit} />
          </label>
        </div>
        {/* -----select a category----- */}
        {/* <form>
          <fieldset className="form-group">
            <div className="row mt-3 ml-5 mr-5">
              <legend className="col-form-label col-sm-2 pt-0">
                Categories
              </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
                    Link
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Video
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option3"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Image
                  </label>
                </div>
              </div>
            </div>
            {/* -----WebsiteName input----- */}
        {/* <div className="form-group row mt-3 ml-5 mr-5">
              <label for="inputName" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-5">
                <input
                  type="name"
                  className="form-control"
                  id="inputName"
                  placeholder="Title"
                />
              </div>
            </div> */}
        {/* -----URL input----- */}
        {/* <div className="form-group row mt-3 ml-5 mr-5">
              <label for="inputURL" className="col-sm-2 col-form-label">
                URL
              </label>
              <div className="col-sm-5">
                <input
                  type="url"
                  className="form-control"
                  id="inputURL"
                  placeholder="URL"
                />
              </div>
            </div>
            <p className="text-primary ml-5">
              *SRC URL for image or video uploading
            </p> */}
        {/* ----Description input----- */}
        {/* <div className="form-group row mt-3 ml-5 mr-5">
              <label for="inputURL" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-5">
                <input
                  type="Description"
                  className="form-control"
                  id="inputDescription"
                  placeholder="Description"
                />
              </div>
            </div>
          </fieldset> */}
        {/* -----upload file----- */}
        {/* <div className="form-group row mt-3 ml-5 mr-5">
              <form method="post" action="#" id="#">
                <div className="form-group files color">
                  <label>Upload Your File </label>
                  <input type="file" className="form-control" multiple="" />
                </div>
              </form>
            </div> */}
        {/* -----save button----- */}
        {/* <div className="form-group row ml-5 mr-5">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </div> */}
        {/* </form> */}
      </>
    )
  }
}

export default Upload
