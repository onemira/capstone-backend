import React, { Component } from 'react'
import Upload from './Upload'

class UploadLink extends Component {
  render() {
    const linkFormSchemaFunction = link => {
      return {
        title: 'Link',
        type: 'object',
        required: ['title', 'url'],
        properties: {
          title: { type: 'string', title: 'Title', default: '' },
          url: { type: 'string', title: 'Url', default: '' },
          description: { type: 'string', title: 'Description', default: '' }
        }
      }
    }

    return (
      <Upload
        history={this.props.history}
        modelName="link"
        apiPostURL={'/api/links'}
        afterSubmitRoute={'/link'}
        formSchemaFunction={linkFormSchemaFunction}
      />
    )
  }
}

export default UploadLink
