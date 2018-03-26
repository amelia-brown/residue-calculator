import React from 'react'

import styles from './styles'

const INITIAL = [0, 0, 0, 0]

export default ({colors, removeColor}) => (
  <div className={styles.base}>
    <div className={styles.container}>
      {
        colors.concat(INITIAL).slice(0, 4).map(color => {
          let background = color
            ? `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`
            : 'rgba(255, 255, 255, 1)'
          return (
            <button
              className={styles.button}
              style={{
                background
              }}
              onClick={removeColor(color)} />
          )
        })
      }
    </div>
  </div>
)
