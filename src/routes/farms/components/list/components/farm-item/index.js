import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from 'components/list-item'

import styles from './styles'

export default ({farm}) => {
  if (!farm) return null
  return (
    <Link
      className={styles.link}
      to={`farms/${farm.get('id')}`}>
      <ListItem
        title={farm.get('name')}
        subtitle={farm.get('address')}
        action='go' />
    </Link>
  )
}
