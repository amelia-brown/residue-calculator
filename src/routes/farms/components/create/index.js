import React, {Component} from 'react'

import Content from 'components/content'
import Title from 'components/title'
import FormField from 'components/form-field'

import styles from './styles'

export default class Create extends Component {
  state = {
    name: '',
    address: '',
    city: ''
  }

  handleChange (e) {
    return (type) => {
      console.log('type', type)
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
            value={this.state.name}
            label={'name'} />
          <FormField
            onChange={::this.handleChange('address')}
            value={this.state.address}
            label={'address'} />
          <FormField
            onChange={::this.handleChange('city')}
            value={this.state.city}
            label={'city'} />
        </form>
      </Content>
    )
  }
}
