import React from 'react'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'

import * as farms from 'modules/farms'
import Content from 'components/content'
import Title from 'components/title'

import Info from './components/info'

const Show = ({farm}) => {
  return (
    <Content>
      <Title>
        {farm.get('name')}
      </Title>
      <Info farm={farm} />
    </Content>
  )
}

export default connect(
  createSelector(
    farms.selectors.getFarms,
    (_, {match: {params: {id}}}) => id,
    (farms, id) => ({
      farm: farms.get(id)
    })
  )
)(Show)
