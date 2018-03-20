import React from 'react'

import img from './img.jpg'
import styles from './styles'

export default () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          background: `url(${img})`
        }}
        className={styles.img} />
    </div>
  )
}
