import React from 'react'
import { Link } from 'react-router-dom'

import DisplayPhoto from 'components/display-photo'

import styles from './styles'

export default ({photos}) => {
  if (!photos) return null
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
