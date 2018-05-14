import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginPage from './components/login-page'

import * as auth from 'modules/auth'

class Login extends Component {
  handleLogin = () => {
    this.props.dispatch(auth.actions.login)
  }

  render () {
    return (
      <LoginPage
        handleLogin={this.handleLogin} />
    )
  }
}

export default connect(
  () => ({})
)(Login)
