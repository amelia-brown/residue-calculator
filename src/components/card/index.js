import React from 'react'
import classnames from 'classnames'

import styles from './styles.sass'

const Card = ({
  className,
  children
}) => (
  <div className={classnames(styles.base, className)}>
    {
      children
    }
  </div>
)

Card.displayName = 'Card'

export default Card
