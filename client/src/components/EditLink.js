import React, { Component } from 'react'
import Edit from './Edit'

class EditLink extends Component {
  render() {
    const linkFormSchemaFunction = link => {
      return {
        title: 'Link',
        type: 'object',
        required: ['url', 'description'],
        properties: {
          title: {
            type: 'string',
            title: 'Title',
            default: link.title
          },
          url: { type: 'string', title: 'Url', default: link.url },
          description: {
            type: 'string',
            title: 'Description',
            default: link.description
          }
        }
      }
    }

    return (
      <Edit
        history={this.props.history}
        modelName="link"
        apiGetURL={`/api/links/${this.props.match.params.id}`}
        apiPutURL={`/api/links/${this.props.match.params.id}`}
        afterSubmitRoute={'/link'}
        formSchemaFunction={linkFormSchemaFunction}
      />
    )
  }
}

export default EditLink
