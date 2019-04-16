import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import axios from 'axios'
import Jumbotron from '../components/Jumbotron'

class Edit extends Component {
  state = {
    model: {}
  }

  componentDidMount = () => {
    axios.get(this.props.apiGetURL).then(response => {
      this.setState({ model: response.data })
    })
  }

  onSubmit = form => {
    axios
      .put(this.props.apiPutURL, {
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

export default Edit
