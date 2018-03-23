import React from 'react'

import Content from 'components/content'
import Title from 'components/title'

import Graph from './components/graph'

import data from '../../data'

export default ({match}) => {
  const farm = data[match.params.id]
  return (
    <Content>
      <Title>
        {farm.name}
      </Title>
      <Graph />
    </Content>
  )
}
