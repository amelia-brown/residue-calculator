import React, { Component } from 'react'

const SIZE = 224
const STROKE = 12
const R = (SIZE / 2) - (STROKE / 2)
const DASH = 2 * Math.PI * R

export default class Graph extends Component {
  state = {
    progress: 0
  }

  componentDidMount () {
    this.updateProgress(0.6)
  }

  updateProgress (progress) {
    var status = 0
    const tick = progress / 100
    while (status < 100) {
      console.log(status, tick, this.state.progress)
      this.setState({
        progress: this.state.progress + tick
      })
      status += 1
    }
    // 1 second
    // progress = 0 => 0.67
    // 60ms / 0.67
  }

  render () {
    return (
      <svg width='224' height='224'>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={R}
          stroke='#5B5B5B'
          strokeWidth={STROKE - 2}
          fill='none' />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={R}
          stroke='#6EE877'
          strokeLinecap='round'
          strokeWidth={STROKE}
          strokeDasharray={DASH - this.state.progress}
          strokeDashoffset={DASH}
          fill='none' />
      </svg>
    )
  }
}
