# Devvit

- **Developer's Directory**
- **Devvit - Reddit for Developers)**
- **Massive data de-clustering solution for developers**

![](devvit.gif)

## Why Devvit :+1:

_Sharing Information_ is a great practice of developers. Throughout immersive code school, we have been shared of a great amount of useful materials in different type of data via Slack. However, searching for the previous information was a hassle at the times like scrolling up and down and searching for random words. In order to solve this clustered data problem shared via Slack, I developed this website with clearly distinguished categories like drawers organize clothing into categories in a dresser.

> Keep Calm and Share Your Data!

### Features

Data organized with subjective org. schema

<!-- ## Code style

![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat) -->

### Tech/framework used

<b>Built with</b>

- [REACT](https://reactjs.org/) Framework
- [PostgreSql](https://www.postgresql.org/) Object-relational database management system
- [RUBY](https://www.ruby-lang.org) Back end Language

### Code Example

```ruby
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
```

### License

SDG © MIRA KANG
