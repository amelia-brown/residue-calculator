import React, { Component } from 'react'

import Copy from 'components/copy'

import styles from './styles'

const SIZE = 224
const STROKE = 12
const R = (SIZE / 2) - (STROKE / 2)
const DASH = 2 * Math.PI * R

export default class Graph extends Component {
  render () {
    const { coverage, totalPhotos } = this.props
    if (!coverage) return null
    return (
      <div className={styles.base}>
        <svg width='224' height='224'>
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={R}
            stroke='#5B5B5B'
            strokeWidth={STROKE - 2}
            fill='none' />
          <circle
            className={styles.progress}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={R}
            stroke='#6EE877'
            strokeLinecap='round'
            strokeWidth={STROKE}
            strokeDasharray={DASH}
            strokeDashoffset={DASH * (1 - coverage)}
            fill='none' />
        </svg>
        <div className={styles.text}>
          <span className={styles.report}>
            {coverage * 100}%
          </span>
          <Copy
            className={styles.copy}
            type='body'>
            residue coverage <br />
            calculated from {totalPhotos} photos
          </Copy>
        </div>
      </div>
    )
  }
}
