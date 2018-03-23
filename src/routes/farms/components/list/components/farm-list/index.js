import React from 'react'

import FarmItem from '../farm-item'
import styles from './styles'

export default ({farms}) => {
  return (
    <div className={styles.list}>
      {
        Object.keys(farms).map(i =>
          <FarmItem farm={farms[i]} />)
      }
    </div>
  )
}
