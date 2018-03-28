import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'

import * as photos from 'modules/photos'
import Content from 'components/content'
import Title from 'components/title'
import Button from 'components/button'

class Add extends Component {
  state = {
    img: false
  }

  onChange (e) {
    let file = e.target.files[0]
    let reader = new FileReader()

    reader.onload = ((file) => {
      return (e) => {
        this.setState({
          img: e.target.result
        })
      }
    })(file)

    reader.readAsDataURL(file)
  }

  handleConfirm () {
    this.savePhoto(this.state.img)
  }

  savePhoto (file) {
    let id = uuid()
    this.props.dispatch(photos.actions.create({
      timestamp: Date.now(),
      id,
      file
    }))
    this.props.history.push(`${this.props.match.url}/${id}/edit`)
  }

  render () {
    return (
      <Content>
        <Title>
          New Photo
        </Title>

        <Button>

          <label
            htmlFor='file-input'>
            Choose File
          </label>

          <input
            style={{
              display: 'none'
            }}
            id='file-input'
            onChange={::this.onChange}
            type='file' />

        </Button>
        {
          this.state.img &&
            <div>
              <img src={this.state.img} />
              <Button
                onClick={::this.handleConfirm}>
                Confirm
              </Button>
            </div>
        }

      </Content>
    )
  }
}

export default connect(
  () => ({})
)(Add)
