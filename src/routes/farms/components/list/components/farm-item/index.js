import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from 'components/list-item'

import styles from './styles'

export default ({farm}) => {
  return (
    <Link
      className={styles.link}
      to={`farms/${farm.id}`}>
      <ListItem
        title={farm.name}
        subtitle={farm.address}
        action='go' />
    </Link>
  )
}
