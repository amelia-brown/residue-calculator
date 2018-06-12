import React, {Component} from 'react'
import { Map } from 'immutable'
import Uri from 'urijs'

import { read, update } from 'support/request'
import SelectColors from './components/select-colors'
import Selection from './components/selection'
import styles from './styles'

export default class Edit extends Component {
  state = {
    photo: new Map(),
    loading: false,
    error: false,
    colors: []
  }

  async componentDidMount () {
    this.setState({
      loading: true
    })
    try {
      let id = this.props.match.params.photoId
      const photo = await read(`photos/${id}`)
      this.setState({
        photo,
        loading: false
      })
    } catch (error) {
      this.setState({
        loading: false,
        error
      })
    }
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

  async confirm (coverage) {
    let params = this.props.match.params
    let path = `/farms/${params.farmId}/fields/${params.fieldId}`
    try {
      await update(`photos/${params.photoId}`, {}, {
        selection: this.state.selection,
        coverage
      })
      this.props.history.push(path)
    } catch (error) {
    }
  }

  render () {
    const photo = this.state.photo
    let url = new Uri().search(true).url
    return (
      <div className={styles.container}>
        {
          photo &&
            <SelectColors
              photo={photo}
              url={url}
              confirm={::this.confirm}
              selectColor={::this.addColor}
              colors={this.state.colors} />
        }
        <Selection
          removeColor={::this.removeColor}
          colors={this.state.colors} />
      </div>
    )
  }
}
