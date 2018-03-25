import React, {Component} from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'

import * as farms from 'modules/farms'
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
      name: '',
      address: '',
      city: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.dispatch(farms.actions.create({
      name: this.state.values.name,
      address: this.state.values.address,
      id: uuid(),
      city: this.state.values.city
    }))
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

export default connect(
  () => ({})
)(Create)
