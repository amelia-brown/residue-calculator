import React from 'react'

import Content from 'components/content'
import Title from 'components/title'

import FarmList from './components/farm-list'

import data from '../../data'

export default () => {
  return (
    <Content>
      <Title>
        Your Farms
      </Title>
      <FarmList
        farms={data} />
    </Content>
  )
}
