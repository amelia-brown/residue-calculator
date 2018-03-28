import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'

import * as fields from 'modules/fields'
import Content from 'components/content'
import Title from 'components/title'
import FormField from 'components/form-field'
import Button from 'components/button'

import styles from './styles'

let validate = (value) => {
  if (!value || !value.trim()) {
    return 'This field is required'
  }
  return false
}

class Create extends Component {
  state = {
    values: {
      name: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    let farm = this.props.match.params.farmId

    this.props.dispatch(fields.actions.create({
      name: this.state.values.name,
      id: uuid()
    },
    farm
    ))
    this.props.history.push('')
  }

  handleChange (type) {
    return (e) => {
      this.setState({
        values: {
          ...this.state.values,
          [type]: e.target.value
        }
      })
    }
  }

  render () {
    return (
      <Content>
        <Title>
          New Field
        </Title>

        <form className={styles.section}>
          <FormField
            onChange={::this.handleChange('name')}
            value={this.state.values.name}
            validate={validate}
            label={'Name'} />

          <Button onClick={::this.handleSubmit}>
            Create
          </Button>
        </form>
      </Content>
    )
  }
}

export default connect(
  () => ({})
)(Create)
