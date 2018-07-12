import React, { Component } from 'react'
import * as requests from 'support/request'
import { withRouter } from 'react-router-dom'

import LoginPage from './components/login-page'

class Login extends Component {
  state = {
    error: false,
    loading: false
  }

  async handleAnonLogin () {
    try {
      await requests.create('login/anonymous', {}, {username: 'fuck', password: 'this'})
      this.props.history.push('/')
    } catch (error) {
      this.setState({
        error: true
      })
    }
  }

  render () {
    return (
      <LoginPage
        handleAnonLogin={::this.handleAnonLogin} />
    )
  }
}

export default withRouter(Login)
