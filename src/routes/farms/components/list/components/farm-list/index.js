import React from 'react'

import EmptyList from 'components/empty-list'

import FarmItem from '../farm-item'
import styles from './styles'

export default ({farms}) => {
  let farmMap = farms.valueSeq()
  if (!farms.count()) {
    return <EmptyList type='farm' />
  }
  return (
    <div className={styles.list}>
      {
        farmMap.map(farm => {
          return (
            <FarmItem farm={farm} />
          )
        })
      }
    </div>
  )
}
