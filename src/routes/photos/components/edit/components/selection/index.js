import React from 'react'

import styles from './styles'

export default ({colors, removeColor}) => (
  <div className={styles.base}>
    <div className={styles.container}>
      {
        colors.concat([1, 2, 3, 4]).map(color => (
          <button
            className={styles.button}
            style={{
              color: `rgba(${color[0]}, ${color[1]}, ${color[2]})`
            }}
            onClick={removeColor(color)} />
        ))
      }
    </div>
  </div>
)
