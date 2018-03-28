import React from 'react'
import { Link } from 'react-router-dom'

import EmptyList from 'components/empty-list'
import DisplayPhoto from 'components/display-photo'

import styles from './styles'

export default ({photos}) => {
  if (!photos.count()) {
    return <EmptyList type='photo' />
  }
  return photos.map(photo => {
    return (
      <Link
        to={`photos/${photo.get('id')}`}
        className={styles.link}>
        <DisplayPhoto photo={photo} />
      </Link>
    )
  })
}
