import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from 'components/list-item'

import styles from './styles'

export default ({field}) => {
  if (!field) return null
  return (
    <Link
      to={`fields/${field.get('id')}`}
      className={styles.link}>
      <ListItem
        action='go'
        title={field.get('name')} />
    </Link>
  )
}
