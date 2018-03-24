import React from 'react'

import FarmItem from '../farm-item'
import styles from './styles'

export default ({farms}) => {
  let farmMap = farms.toOrderedMap()
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
