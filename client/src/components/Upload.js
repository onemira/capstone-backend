import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import Jumbotron from './Jumbotron'

class Upload extends Component {
  state = {
    model: {}
  }

  onSubmit = form => {
    axios
      .post(this.props.apiPostURL, {
        [this.props.modelName]: form.formData
      })
      .then(response => {
        this.props.history.push(this.props.afterSubmitRoute)
      })
  }

  render() {
    return (
      <>
        <Jumbotron />
        <div className="form-group row mt-3 ml-5 mr-1">
          <Form
            schema={this.props.formSchemaFunction(this.state.model)}
            onSubmit={this.onSubmit}
          />
        </div>
      </>
    )
  }
}

export default Upload
