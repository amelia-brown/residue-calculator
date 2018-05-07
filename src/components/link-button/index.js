import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/button'

import styles from './styles.sass'

export default ({
  children,
  to,
  primary,
  className
}) => (
  <Link
    className={styles.base}
    to={to}>
    <Button
      primary>
      {children}
    </Button>
  </Link>
)
