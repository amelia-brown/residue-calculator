import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Button from 'components/button'

import styles from './styles.sass'

export default ({
  children,
  to,
  primary,
  className
}) => (
  <Link
    className={classnames(styles.base, className)}
    to={to}>
    <Button
      primary>
      {children}
    </Button>
  </Link>
)
