import React from 'react'
import { Link } from 'react-router-dom'

import EmptyList from 'components/empty-list'
import ListItem from 'components/list-item'

import styles from './styles'

export default ({fields, path}) => {
  if (!fields.count()) {
    return <EmptyList type={'field'} />
  }
  return fields.map(field => {
    return (
      <Link
        to={`${path}/fields/${field.get('id')}`}
        className={styles.link}>
        <ListItem
          action='go'
          title={field.get('name')} />
      </Link>
    )
  })
}
