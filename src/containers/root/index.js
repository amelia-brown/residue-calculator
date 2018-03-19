import React, { Component } from 'react'
import {renderRoutes} from 'react-router-config'

export default class Root extends Component {
  static displayName = 'Root'

  render () {
    return (
      <div>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}
