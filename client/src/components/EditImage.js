import React, { Component } from 'react'
import Edit from './Edit'

class EditImage extends Component {
  render() {
    //created function to call Image Form Schema using embedding expression
    const imageFormSchemaFunction = image => {
      return {
        title: 'Image',
        type: 'object',
        required: ['url', 'description'],
        properties: {
          url: { type: 'string', title: 'Url', default: image.url },
          description: {
            type: 'string',
            title: 'Description',
            default: image.description
          }
        }
      }
    }
    // access id from the URL via match.params on the props in generic (composing) components
    return (
      <Edit
        history={this.props.history}
        modelName="image"
        apiGetURL={`/api/images/${this.props.match.params.id}`}
        apiPutURL={`/api/images/${this.props.match.params.id}`}
        afterSubmitRoute={'/image'}
        formSchemaFunction={imageFormSchemaFunction}
      />
    )
  }
}

export default EditImage
