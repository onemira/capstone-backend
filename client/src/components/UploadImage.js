import React, { Component } from 'react'
import Upload from './Upload'

class UploadImage extends Component {
  render() {
    const imageFormSchemaFunction = image => {
      return {
        title: 'Image',
        type: 'object',
        required: ['url', 'description'],
        properties: {
          url: { type: 'string', title: 'Url', default: '' },
          description: { type: 'string', title: 'Description', default: '' }
        }
      }
    }

    return (
      <Upload
        history={this.props.history}
        modelName="image"
        apiPostURL={`/api/images`}
        afterSubmitRoute={'/image'}
        formSchemaFunction={imageFormSchemaFunction}
      />
    )
  }
}

export default UploadImage
