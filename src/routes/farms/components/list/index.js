import React, { Component } from 'react'
import Immutable from 'immutable'

import Content from 'components/content'
import Title from 'components/title'
import Button from 'components/button'
import { read } from 'support/request'

import FarmList from './components/farm-list'

export default class List extends Component {
  state = {
    farms: new Immutable.List()
  }

  async componentDidMount () {
    const farms = await read('farms')
    this.setState({
      farms
    })
  }

  render () {
    let {history} = this.props
    let {farms} = this.state

    return (
      <Content>

        <Title>
          Your Farms
        </Title>

        <Button onClick={() => history.push('/farms/create')}>
          New Farm
        </Button>

        <FarmList
          farms={farms} />

      </Content>
    )
  }
}
