import React from 'react'

import styles from './styles'

export default ({colors, removeColor}) => (
  <div className={styles.base}>
    <div className={styles.container}>
      {
        colors.map(color => {
          return (
            <button
              className={styles.button}
              style={{
                background: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`
              }}
              onClick={removeColor(color)} />
          )
        })
      }
    </div>
  </div>
)
