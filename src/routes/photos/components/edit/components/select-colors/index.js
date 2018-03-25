import React, { Component } from 'react'

import RoundButton from 'components/round-button'

import styles from './styles'

const BLUE = [26, 255, 234]
// const BLUE = [255, 0, 255] // [73, 0, 255]

function match (current, target, threshold = 20) {
  return Math.abs(current - target) <= threshold
}

function findMatchingArea (data, colors) {
  for (var i = 0; i < data.length; i += 4) {
    for (var j = 0; j < colors.length; j++) {
      let target = colors[j]
      let r = match(data[i], target[0])
      let g = match(data[i + 1], target[1])
      let b = match(data[i + 2], target[2])
      if (r && g && b) {
        data[i] = BLUE[0]
        data[i + 1] = BLUE[1]
        data[i + 2] = BLUE[2]
      }
    }
  }
  return data
}

export default class Home extends Component {
  state = {
    height: 0,
    width: 0,
    displaySelection: true
  }

  boundMouseDown = ::this.handleMouseDown

  componentDidMount () {
    this.setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const canvas = document.getElementById('original')
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

    image.src = this.props.photo.get('file')

    window.addEventListener('mousedown', this.boundMouseDown)
  }

  componentWillUnmount () {
    window.removeEventListener('mousedown', this.boundMouseDown)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.colors !== nextProps.colors) {
      this.handleReplace(nextProps.colors)
    }
  }

  setDimensions () {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  handleMouseDown (e) {
    if (e.target.tagName !== 'CANVAS') return
    const canvas = document.getElementById('original')
    const context = canvas.getContext('2d')

    let color = context.getImageData(e.clientX, e.clientY, 1, 1).data

    this.props.selectColor(Array.from(color))
  }

  handleReplace (colors) {
    const originalCanvas = document.getElementById('original')
    const originalContext = originalCanvas.getContext('2d')

    const selectionCanvas = document.getElementById('selection')
    const selectionContext = selectionCanvas.getContext('2d')

    let data = originalContext
      .getImageData(0, 0, this.state.width, this.state.height)
      .data

    let pixels = new ImageData(
      findMatchingArea(data, colors),
      this.state.width,
      this.state.height
    )

    selectionContext.putImageData(pixels, 0, 0)
  }

  toggleDisplaySelection () {
    this.setState({
      displaySelection: !this.state.displaySelection
    })
  }

  render () {
    let icon = this.state.displaySelection
      ? 'hide'
      : 'show'
    return (
      <div className={styles.container}>
        <canvas
          id='original'
          width={this.state.width}
          height={this.state.height}
          className={styles.canvas} />
        <canvas
          id='selection'
          style={{
            opacity: this.state.displaySelection
              ? '1'
              : '0'
          }}
          width={this.state.width}
          height={this.state.height}
          className={styles.canvas} />
        <RoundButton
          type={icon}
          onClick={::this.toggleDisplaySelection}
          className={styles.toggle} />
      </div>
    )
  }
}
