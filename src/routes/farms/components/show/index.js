import React from 'react'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as farms from 'modules/farms'
import Content from 'components/content'
import Title from 'components/title'
import Button from 'components/button'

import Info from './components/info'
import FieldList from './components/fields'
import styles from './styles.sass'

const Show = ({farm}) => {
  return (
    <Content>

      <Title>
        {farm.get('name')}
      </Title>

      <Info farm={farm} />

      <FieldList />

      <Link
        className={styles.button}
        to={'/fields/create'}>
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
    (_, {match: {params: {id}}}) => id,
    (farms, id) => ({
      farm: farms.get(id)
    })
  )
)(Show)
