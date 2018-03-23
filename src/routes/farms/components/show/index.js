import React from 'react'

import Content from 'components/content'
import Title from 'components/title'

import Info from './components/info'

import data from '../../data'

export default ({match}) => {
  const farm = data[match.params.id]
  return (
    <Content>
      <Title>
        {farm.name}
      </Title>
      <Info farm={farm} />
    </Content>
  )
}
