import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import * as photos from 'modules/photos'
import Content from 'components/content'
import Title from 'components/title'
import DisplayPhoto from 'components/display-photo'

const Show = ({photo}) => (
  <Content>
    <Title>
      Photo
    </Title>
    <DisplayPhoto
      photo={photo} />
  </Content>
)

export default connect(
  createSelector(
    photos.selectors.getPhotos,
    (_, {match: {params: {id}}}) => id,
    (photos, id) => ({
      photo: photos.get(`${id}`)
    })
  )
)(Show)
