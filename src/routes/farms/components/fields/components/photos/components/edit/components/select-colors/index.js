import React, { Component } from 'react'

import RoundButton from 'components/round-button'
import { findMatchingArea } from 'support/mixins'

import styles from './styles'

// const BLUE = [255, 0, 255] // [73, 0, 255]

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

    console.log(e)

    let color = context.getImageData(e.layerX, e.layerY, 1, 1).data

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
    let displayIcon = this.state.displaySelection
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
        <div className={styles.actions}>
          {
            this.props.colors.length > 1 &&
              <RoundButton
                type='check'
                onClick={this.props.confirm}
                className={styles.action} />
          }
          <RoundButton
            type={displayIcon}
            onClick={::this.toggleDisplaySelection}
            className={styles.action} />
        </div>
      </div>
    )
  }
}
