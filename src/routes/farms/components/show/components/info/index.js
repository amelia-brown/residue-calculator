import React from 'react'

import Card from 'components/card'
import Copy from 'components/copy'

import Graph from '../graph'
import styles from './styles'

export default ({farm}) => (
  <Card>
    {
      farm.get('coverage')
        ? <Graph coverage={farm.get('coverage')} />
        : <Copy type='subtitle'>No coverage data available</Copy>
    }
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
