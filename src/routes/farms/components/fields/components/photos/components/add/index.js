import React, { Component } from 'react'
import { connect } from 'react-redux'

import Content from 'components/content'
import Title from 'components/title'
import Button from 'components/button'

import styles from './styles'

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
          file: file,
          img: e.target.result,
          name: file.name
        })
      }
    })(file)

    reader.readAsDataURL(file)
  }

  handleConfirm () {
    this.getSignedRequest()
  }

  async getSignedRequest () {
    const {file} = this.state
    try {
      const resp = await fetch(
        `/api/sign-s3?file-name=${file.name}&file-type=${file.type}`,
        {
          headers: {'content-type': 'application/json'}
        }
      )
      const json = await resp.json()
      console.log(resp, json)
      this.savePhoto(json.signedRequest, json.url)
    } catch (error) {
      console.log(error)
    }
  }

  async savePhoto (signedRequest, url) {
    try {
      const response = await fetch(
        signedRequest,
        {
          method: 'put',
          body: this.state.image
        }
      )

      const text = await response.text()

      console.log('xx', text)

      const tempUrl = encodeURIComponent(url)
      this.props.history.push(`${this.props.match.url}/edit?url=${tempUrl}`)
    } catch (error) {
      console.log(error)
    }
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
              <img
                className={styles.image}
                src={this.state.img} />
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
