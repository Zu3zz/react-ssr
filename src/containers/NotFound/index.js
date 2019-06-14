import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class NotFound extends Component {
  componentWillMount() {
    const { staticContext } = this.props
    staticContext && (staticContext.NOT_FOUND = true)
  }
  render() {
    return <div>404, page not found</div>
  }
}

export default NotFound
