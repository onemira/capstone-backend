import React, { Component } from 'react'
import Edit from './Edit'

class EditVideo extends Component {
  render() {
    const videoFormSchemaFunction = video => {
      return {
        title: 'Video',
        type: 'object',
        required: ['url', 'description'],
        properties: {
          url: { type: 'string', title: 'Url', default: video.url },
          description: {
            type: 'string',
            title: 'Description',
            default: video.description
          }
        }
      }
    }

    return (
      <Edit
        history={this.props.history}
        modelName="video"
        apiGetURL={`/api/videos/${this.props.match.params.id}`}
        apiPutURL={`/api/videos/${this.props.match.params.id}`}
        afterSubmitRoute={'/video'}
        formSchemaFunction={videoFormSchemaFunction}
      />
    )
  }
}

export default EditVideo
