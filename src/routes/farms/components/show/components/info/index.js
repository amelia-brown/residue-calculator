import React from 'react'

import Card from 'components/card'
import Copy from 'components/copy'

import styles from './styles'

export default ({farm}) => (
  <Card className={styles.card}>
    <div className={styles.section}>
      <Copy type='body'>
        Name: {farm.get('name')}
      </Copy>
      <Copy type='body'>
        Address: {farm.get('address')}
      </Copy>
    </div>
  </Card>
)
