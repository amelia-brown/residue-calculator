import React, { Component } from 'react'
import * as requests from 'support/request'

import LoginPage from './components/login-page'

export default class Login extends Component {
  state = {
    error: false,
    loading: false
  }

  async handleAnonLogin () {
    try {
      const resp = await requests.read('login/anonymous')
      console.log(resp) // eslint-disable-line
    } catch (error) {
      console.log(error) // eslint-disable-line
      this.setState({
        error: true
      })
    }
  }

  render () {
    return (
      <LoginPage
        handleAnonLogin={this.handleAnonLogin} />
    )
  }
}
