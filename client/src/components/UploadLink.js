import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import Navbar from './Navbar'
import Jumbotron from '../components/Jumbotron'

class UploadLink extends Component {
  onSubmit = form => {
    // console.log(form)

    axios
      .post('http://localhost:3000/api/links', {
        video: form.formData
      })
      .then(response => {
        console.log(response)
        // this.props.history.push('/')
      })
  }

  render() {
    const formSchema = {
      title: 'Link',
      type: 'object',
      required: ['title', 'url'],
      properties: {
        title: { type: 'string', title: 'Title', default: '' },
        url: { type: 'string', title: 'Url', default: '' },
        description: { type: 'string', title: 'Description', default: '' }
      }
    }

    return (
      <>
        <Navbar />
        <Jumbotron />
        <div className="form-group row mt-3 ml-5 mr-1">
          <label for="inputName" className="col-sm-5 col-form-label">
            <Form schema={formSchema} onSubmit={this.onSubmit} />
          </label>
        </div>
      </>
    )
  }
}

export default UploadLink
