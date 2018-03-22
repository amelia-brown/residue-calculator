import React from 'react'

import FarmItem from '../farm-item'
import styles from './styles'

export default ({farms}) => {
  return (
    <div className={styles.list}>
      {
        farms.map(farm =>
          <FarmItem farm={farm} />)
      }
    </div>
  )
}
