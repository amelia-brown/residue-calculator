import React from 'react'

import EmptyList from 'components/empty-list'
import DisplayPhoto from 'components/display-photo'

export default ({photos, path}) => {
  if (!photos || !photos.count()) {
    return <EmptyList type='photo' />
  }
  return photos.map(photo => {
    return (
      <DisplayPhoto photo={photo} />
    )
  })
}
