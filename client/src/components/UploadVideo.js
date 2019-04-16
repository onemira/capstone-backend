import React, { Component } from 'react'
import Upload from './Upload'

class UploadVideo extends Component {
  render() {
    const videoFormSchemaFunction = video => {
      return {
        title: 'Video',
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
        modelName="video"
        apiPostURL={'/api/videos'}
        afterSubmitRoute={'/video'}
        formSchemaFunction={videoFormSchemaFunction}
      />
    )
  }
}

export default UploadVideo
