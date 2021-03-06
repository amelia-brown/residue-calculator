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
      name: '',
      address: '',
      city: ''
    }
  }

  async handleSubmit (e) {
    e.preventDefault()
    try {
      const resp = await create('farms', {}, {
        name: this.state.values.name,
        address: this.state.values.address,
        city: this.state.values.city
      })

      this.props.history.push(`/farms/${resp.get('id')}`)
    } catch (err) {
      console.log(err) // eslint-disable-line
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
          New Farm
        </Title>

        <form className={styles.section}>
          <FormField
            onChange={::this.handleChange('name')}
            value={this.state.values.name}
            validate={validate}
            label={'Name'} />
          <FormField
            onChange={::this.handleChange('address')}
            value={this.state.values.address}
            validate={validate}
            label={'Address'} />
          <FormField
            onChange={::this.handleChange('city')}
            value={this.state.values.city}
            validate={validate}
            label={'City'} />

          <Button
            onClick={::this.handleSubmit}>
            Create
          </Button>
        </form>

      </Content>
    )
  }
}
