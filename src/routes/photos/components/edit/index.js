import React, {Component} from 'react'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'

import * as photos from 'modules/photos'

import SelectColors from './components/select-colors'
import Selection from './components/selection'
import styles from './styles'

class Edit extends Component {
  state = {
    colors: []
  }

  addColor (color) {
    this.setState({
      colors: [...this.state.colors, color]
    })
  }

  removeColor (color) {
    return (e) => {
      e.stopPropagation()
      this.setState({
        colors: this.state.colors
          .filter(item => {
            let match = item.every((val, i) => val === color[i])
            return !match
          })
      })
    }
  }

  render () {
    return (
      <div className={styles.container}>
        <SelectColors
          photo={this.props.photo}
          selectColor={::this.addColor}
          colors={this.state.colors} />
        <Selection
          removeColor={::this.removeColor}
          colors={this.state.colors} />
      </div>
    )
  }
}

export default connect(
  createSelector(
    photos.selectors.getPhotos,
    (_, {match: {params: {id}}}) => id,
    (photos, id) => ({
      photo: photos.get(`${id}`)
    })
  )
)(Edit)
