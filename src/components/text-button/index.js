import React from 'react'
import classnames from 'classnames'

import Copy from 'components/copy'
import styles from './styles.sass'

export default ({
  children,
  onClick,
  className
}) => (
  <button
    className={classnames(className, styles.base)}
    onClick={onClick}>
    <Copy
      className={styles.copy}
      type='body'>
      {children}
    </Copy>
  </button>
)
