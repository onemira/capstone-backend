import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'

class Edit extends Component {
  state = {
    link: {}
  }

  componentDidMount = () => {
    axios.get(`/api/links/${this.props.match.params.id}`).then(response => {
      this.setState({ link: response.data })
    })
  }

  onSubmit = form => {
    axios
      .put(`/api/links/${this.props.match.params.id}`, {
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
      required: ['url', 'description'],
      properties: {
        title: { type: 'string', title: 'Title', default: '' },
        url: { type: 'string', title: 'Url', default: this.state.link.url },
        description: {
          type: 'string',
          title: 'Description',
          default: this.state.link.description
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
