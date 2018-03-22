import React from 'react'

import Copy from 'components/copy'
import RoundButton from 'components/round-button'

import styles from './styles.sass'

const Card = ({
  className,
  title, // required
  subtitle,
  action
}) => (
  <div className={`${styles.base} ${className}`}>
    <div className={styles.text}>
      <Copy type='title'>{title}</Copy>
      {
        subtitle &&
          <Copy type='subtitle'>{subtitle}</Copy>
      }
    </div>
    {
      action &&
        <div className={styles.action}>
          <RoundButton
            type={action} />
        </div>
    }
  </div>
)

Card.displayName = 'Card'

export default Card
