import React from 'react'

import styles from './styles.sass'

const ICONS = {
  go: 'chevron_right'
}

const RoundButton = ({
  className,
  type,
  dark
}) => (
  <div
    className={`
      ${styles.base}
      ${className}
      ${dark ? styles.dark : ''}
    `}>
    <i
      className={`
        material-icons
        ${dark ? styles['icon-dark'] : styles.icon}
      `}>
      {ICONS[type]}
    </i>
  </div>
)

RoundButton.displayName = 'RoundButton'

export default RoundButton