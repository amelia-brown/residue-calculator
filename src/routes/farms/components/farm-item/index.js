import React from 'react'

import Card from 'components/card'

export default ({farm}) => {
  return (
    <Card
      title={farm.name}
      subtitle={farm.location}
      action='go' />
  )
}
