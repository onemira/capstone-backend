## Why Devvit :+1:

_Sharing Information_ is a great practice of developers. Throughout immersive code school, we have been shared of a great amount of useful materials in different type of data via Slack. However, searching for the previous information was a hassle at the times like scrolling up and down and searching for random words. In order to solve this clustered data problem shared via Slack, I developed this website with clearly distinguished categories like drawers organize clothing into categories in a dresser.

![](devvit.gif)

> Keep Calm and Share Your Data!

### Tech/framework used

<b>Built with</b>

- [React](https://reactjs.org/): Framework
- [SQL](http://www.sqlcourse.com): The Standard Language for Relational Database Management Systems
- [Ruby](https://www.ruby-lang.org): Back-end Language

### Code Example

```ruby
class EditImage extends Component {
  render() {
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
```

SDG © MIRA KANG
