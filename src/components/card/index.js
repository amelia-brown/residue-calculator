import React from 'react'

import styles from './styles.sass'

const Card = ({
  className,
  children
}) => (
  <div className={`${styles.base} ${className}`}>
    {
      children
    }
  </div>
)

Card.displayName = 'Card'

export default Card
