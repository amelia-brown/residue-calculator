import React, { Component } from 'react'

import { create } from 'support/request'
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

export default class Create extends Component {
  state = {
    values: {
      name: ''
    }
  }

  async handleSubmit (e) {
    e.preventDefault()
    try {
      let farmId = this.props.match.params.farmId

      const resp = await create('fields', {},
        {
          name: this.state.values.name,
          farmId
        }
      )
      console.log(resp) // eslint-disable-line
      this.props.history.push(`${resp.get('id')}`)
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
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
