import React from 'react'

import Card from 'components/card'
import Copy from 'components/copy'

import Graph from '../graph'
import styles from './styles'

export default ({farm}) => (
  <Card>
    <Graph coverage={farm.coverage} />
    <div className={styles.section}>
      <Copy type='body'>
        Name: {farm.name}
      </Copy>
      <Copy type='body'>
        Address: {farm.address}
      </Copy>
    </div>
  </Card>
)
