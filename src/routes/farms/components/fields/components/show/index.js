import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { Link } from 'react-router-dom'

import * as fields from 'modules/fields'
import * as photos from 'modules/photos'
import { getFieldPhotos } from 'support/selectors'
import Content from 'components/content'
import Title from 'components/title'
import Subtitle from 'components/subtitle'
import Button from 'components/button'
import Copy from 'components/copy'
import Card from 'components/card'

import Graph from './components/graph'
import PhotoList from './components/photos'
import styles from './styles.sass'

const Show = ({field, match}) => (
  <Content>
    <Title>
      {field.get('name')}
    </Title>

    <Card>
      <div className={styles.section}>
        {
          field.get('coverage')
            ? <Graph coverage={field.get('coverage')} />
            : <Copy type='subtitle'>No coverage data available</Copy>
        }
      </div>
    </Card>

    <Subtitle type='subtitle'>
      Photos
    </Subtitle>

    <PhotoList photos={field.get('photos')} />

    <Link
      className={styles.button}
      to={`${match.url}/photos`}>
      <Button>
        Take New Photo
      </Button>
    </Link>
  </Content>
)

export default connect(
  createSelector(
    fields.selectors.getFields,
    photos.selectors.getPhotos,
    (_, {match: {params: {fieldId}}}) => fieldId,
    (fieldList, photoList, id) => ({
      field: getFieldPhotos(id, fieldList, photoList)
    })
  )
)(Show)
