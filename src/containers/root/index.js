import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'

import { read } from 'support/request'

class Root extends Component {
  static displayName = 'Root'

  async componentDidMount () {
    try {
      const user = await read('user')
      if (!user.get('loggedIn')) {
        this.props.history.push('/login')
      }
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <div>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

export default withRouter(Root)
