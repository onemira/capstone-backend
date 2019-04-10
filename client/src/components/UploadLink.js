import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import Jumbotron from '../components/Jumbotron'

class UploadLink extends Component {
  onSubmit = form => {
    axios
      .post('/api/links', {
        link: form.formData
      })
      .then(response => {
        this.props.history.push('/link')
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
