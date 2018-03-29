import React from 'react'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getFarmFields } from 'support/selectors'
import * as farms from 'modules/farms'
import * as fields from 'modules/fields'
import Content from 'components/content'
import Title from 'components/title'
import Subtitle from 'components/subtitle'
import Button from 'components/button'

import Info from './components/info'
import FieldList from './components/fields'
import styles from './styles.sass'

const Show = ({farm, match}) => {
  if (!farm) return null
  return (
    <Content>

      <Title>
        {farm.get('name')}
      </Title>

      <Info farm={farm} />

      <Subtitle type='subtitle'>
        Fields
      </Subtitle>

      <FieldList
        path={match.url}
        fields={farm.get('fields')} />

      <Link
        className={styles.button}
        to={`${match.url}/fields/create`}>
        <Button>
          New Field
        </Button>
      </Link>

    </Content>
  )
}

export default connect(
  createSelector(
    farms.selectors.getFarms,
    fields.selectors.getFields,
    (_, {match: {params: {farmId}}}) => farmId,
    (farmList, fieldList, id) => {
      return ({
        farm: getFarmFields(id, farmList, fieldList)
      })
    }
  )
)(Show)
