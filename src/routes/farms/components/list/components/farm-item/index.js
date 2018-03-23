import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'components/card'

import styles from './styles'

export default ({farm}) => {
  return (
    <Link
      className={styles.link}
      to={`farms/${farm.id}`}>
      <Card
        title={farm.name}
        subtitle={farm.address}
        action='go' />
    </Link>
  )
}
