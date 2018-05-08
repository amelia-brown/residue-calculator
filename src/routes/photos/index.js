import React from 'react'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as farms from 'modules/farms'
import Content from 'components/content'
import Title from 'components/title'
import ListItem from 'components/list-item'
import Copy from 'components/copy'
import LinkButton from 'components/link-button'

import styles from './styles'

const List = ({history, farms}) => {
  return (
    <Content>
      <Title>
        Pick a farm
      </Title>

      {
        farms.size < 1 &&
          <div className={styles.section}>
            <Copy
              className={styles.copy}
              type='body'>
              You have no farms.
            </Copy>
            <LinkButton
              dark
              to={'farms/create'}>
              Create One
            </LinkButton>
          </div>
      }

      {
        farms.map((farm) => (
          <Link to={`farms/${farm.get('id')}`}>
            <ListItem
              action='go'
              title={farm.get('name')} />
          </Link>
        ))
      }

    </Content>
  )
}

export default connect(
  createSelector(
    farms.selectors.getFarms,
    farms => ({farms})
  )
)(List)
