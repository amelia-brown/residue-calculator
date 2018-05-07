import React, {Component} from 'react'
import classNames from 'classnames'

import { findMatchingArea } from 'support/mixins'

import styles from './styles'

const MARGIN = 16

export default class DisplayPhoto extends Component {
  state = {
    image: false,
    overlay: false,
    height: 0,
    width: 0
  }

  componentDidMount () {
    this.setState({
      width: window.innerWidth - MARGIN * 2
    })

    const canvas = document.querySelector('#original')
    const context = canvas.getContext('2d')
    let image = new Image()
    let that = this
    image.onload = () => {
      // const ratio = image.width / image.height
      let scaling = canvas.width / image.width
      let width = image.width * scaling
      let height = image.height * scaling

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

      that.setImage()
    }

    image.src = this.props.photo.get('file')
  }

  toggleOverlay () {
    this.setState({
      overlay: !this.state.overlay
    })
  }

  setImage () {
    const canvas = document.querySelector('#selection')
    const context = canvas.getContext('2d')
    const ogCanvas = document.querySelector('#original')
    const ogContext = ogCanvas.getContext('2d')

    let data = ogContext
      .getImageData(0, 0, this.state.width, this.state.height)
      .data

    if (this.props.photo.has('selection')) {
      let pixels = new ImageData(
        findMatchingArea(data, this.props.photo.get('selection').toJS()),
        this.state.width,
        this.state.height
      )

      context.putImageData(pixels, 0, 0)
    }
  }

  render () {
    let displayToggle = this.props.photo.get('selection')
    return (
      <div className={styles.base}>
        <div
          style={{
            height: `${this.state.height || 100}px`,
            width: `${this.state.width}px`
          }}
          className={styles.container}>
          <canvas
            id='original'
            className={styles.canvas}
            height={this.state.height || 100}
            width={this.state.width} />
          <canvas
            id='selection'
            style={{
              opacity: this.state.overlay
                ? '1'
                : '0'
            }}
            className={styles.canvas}
            height={this.state.height || 100}
            width={this.state.width} />
        </div>
        {
          displayToggle &&
            <div className={styles.toggle}>
              <button
                onClick={::this.toggleOverlay}
                className={classNames(
                  styles['toggle-button'],
                  {
                    [styles.selected]: !this.state.overlay
                  }
                )} />
              <button
                onClick={::this.toggleOverlay}
                className={classNames(
                  styles['toggle-button'],
                  {
                    [styles.selected]: this.state.overlay
                  }
                )} />
            </div>
        }
      </div>
    )
  }
}
