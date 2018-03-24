import React, { Component } from 'react'

import styles from './styles'
import img from './img.jpg'

const BLUE = [26, 255, 234]
// const BLUE = [255, 0, 255] // [73, 0, 255]

function match (current, target, threshold = 20) {
  return Math.abs(current - target) <= threshold
}

function findMatchingArea (data, target) {
  for (var i = 0; i < data.length; i += 4) {
    let r = match(data[i], target[0])
    let g = match(data[i + 1], target[1])
    let b = match(data[i + 2], target[2])
    if (r && g && b) {
      data[i] = BLUE[0]
      data[i + 1] = BLUE[1]
      data[i + 2] = BLUE[2]
    }
  }
  return data
}

export default class Home extends Component {
  state = {
    height: 0,
    width: 0
  }

  boundMouseDown = ::this.handleMouseDown

  componentDidMount () {
    this.setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const canvas = document.querySelector('canvas')
    const context = canvas.getContext('2d')

    let image = new Image()

    let that = this

    image.onload = () => {
      const ratio = image.width / image.height

      let width
      let height
      let scaling

      switch (ratio < 1) {
        case true:
          scaling = canvas.width / image.width
          width = image.width * scaling
          height = image.height * scaling

          break

        case false:
        default:
          scaling = canvas.height / image.height
          width = image.width * scaling
          height = image.height * scaling

          break
      }

      that.setState({
        width,
        height
      })

      context.drawImage(
        image,
        0,
        0,
        width,
        height
      )
    }

    image.src = img

    window.addEventListener('mousedown', this.boundMouseDown)
  }

  componentWillUnmount () {
    console.log('xxx')
    window.removeEventListener('mousedown', this.boundMouseDown)
  }

  setDimensions () {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  handleMouseDown (e) {
    const canvas = document.querySelector('canvas')
    const context = canvas.getContext('2d')

    let color = context.getImageData(e.clientX, e.clientY, 1, 1).data

    this.handleReplace(color)
  }

  handleReplace (color) {
    let canvas = document.querySelector('canvas')
    const context = canvas.getContext('2d')

    let data = context
      .getImageData(0, 0, this.state.width, this.state.height)
      .data

    let pixels = new ImageData(
      findMatchingArea(data, color),
      this.state.width,
      this.state.height
    )

    context.putImageData(pixels, 0, 0)
  }

  render () {
    return (
      <div className={styles.container}>
        <canvas
          width={this.state.width}
          height={this.state.height}
          className={styles.canvas} />
      </div>
    )
  }
}
