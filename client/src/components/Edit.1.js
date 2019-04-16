import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'

class Edit extends Component {
  state = {
    video: {},
    image: {},
    link: {}
  }

  componentDidMount = () => {
    axios.get(`/api/videos/${this.props.match.params.id}`).then(response => {
      this.setState({ video: response.data })
    })
  }

  onSubmit = form => {
    axios
      .put(`/api/videos/${this.props.match.params.id}`, {
        video: form.formData
      })
      .then(response => {
        this.props.history.push('/video')
      })
  }

  render() {
    const formSchema = {
      title: 'Video',
      type: 'object',
      required: ['url', 'description'],
      properties: {
        url: { type: 'string', title: 'Url', default: this.state.video.url },
        description: {
          type: 'string',
          title: 'Description',
          default: this.state.video.description
        }
      }
    }

    return (
      <>
        <div className="form-group row mt-3 ml-5 mr-1">
          <label for="inputName" className="col-sm-5 col-form-label">
            <Form schema={formSchema} onSubmit={this.onSubmit} />
          </label>
        </div>
      </>
    )
  }
}

export default Edit
