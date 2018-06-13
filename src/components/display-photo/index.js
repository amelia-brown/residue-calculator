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

  async componentDidMount () {
    this.setState({
      width: window.innerWidth - MARGIN * 2
    })

    const canvas = document.querySelector('#selection')
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

    const reader = new FileReader()
    reader.onload = e => {
      image.src = e.target.result
    }

    try {
      const blob = await this.getImageBlob()
      reader.readAsDataURL(blob)
    } catch (err) {
      console.log(err) // eslint-disable-line
    }
  }

  async getImageBlob () {
    try {
      const resp = await fetch(this.props.photo.get('photo'))
      const blob = await resp.blob()
      return blob
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
  }

  toggleOverlay () {
    this.setState({
      overlay: !this.state.overlay
    })
  }

  setImage () {
    const canvas = document.querySelector('#selection')
    const context = canvas.getContext('2d')

    let data = context
      .getImageData(0, 0, this.state.width, this.state.height)
      .data

    if (this.props.photo.has('selection')) {
      const selection = JSON.parse(this.props.photo.get('selection'))
      let pixels = new ImageData(
        findMatchingArea(data, selection),
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
          <img
            className={styles.canvas}
            src={this.props.photo.get('photo')}
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
