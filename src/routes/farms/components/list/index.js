import React from 'react'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'

import * as farms from 'module.farms'
import Content from 'components/content'
import Title from 'components/title'
import Button from 'components/button'

import FarmList from './components/farm-list'

const List = ({history, farms}) => {
  return (
    <Content>

      <Title>
        Your Farms
      </Title>

      <Button onClick={() => history.push('/farms/create')}>
        New Farm
      </Button>

      <FarmList
        farms={data} />

    </Content>
  )
}

export default connect(
  createSelector()
)(List)
