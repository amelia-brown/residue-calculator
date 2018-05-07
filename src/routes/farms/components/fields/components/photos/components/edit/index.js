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
    if (this.state.colors.length > 3) return
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

  confirm (coverage) {
    let params = this.props.match.params
    let path = `/farms/${params.farmId}/fields/${params.fieldId}`
    this.props.dispatch(photos.actions.edit({
      id: this.props.photo.get('id'),
      data: this.props.photo.merge({
        selection: this.state.colors,
        coverage
      })
    }))
    this.props.history.push(path)
  }

  render () {
    return (
      <div className={styles.container}>
        <SelectColors
          photo={this.props.photo}
          confirm={::this.confirm}
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
    (_, {match: {params: {photoId}}}) => photoId,
    (photos, id) => ({
      photo: photos.get(`${id}`)
    })
  )
)(Edit)
