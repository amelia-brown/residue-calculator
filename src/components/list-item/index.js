import React from 'react'

import Copy from 'components/copy'
import Card from 'components/card'
import RoundButton from 'components/round-button'

import styles from './styles.sass'

const ListItem = ({
  className,
  title, // required
  subtitle,
  action
}) => (
  <Card className={styles.container}>
    <div className={styles.text}>
      <Copy
        className={styles.title}
        type='title'>
        {title}
      </Copy>
      {
        subtitle &&
          <Copy
            className={styles.subtitle}
            type='subtitle'>
            {subtitle}
          </Copy>
      }
    </div>
    {
      action &&
        <div className={styles.action}>
          <RoundButton
            type={action} />
        </div>
    }
  </Card>
)

ListItem.displayName = 'ListItem'

export default ListItem
