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

  handleConfirm = (e) => {
    e.preventDefault()
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
          headers: {'content-type': this.state.file.type},
          body: this.state.file
        }
      )

      await response.text()

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

        <form onSubmit={this.handleConfirm}>
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

          {
            this.state.img &&
              <div>
                <img
                  className={styles.image}
                  src={this.state.img} />
                <Button
                  type='submit'>
                  Confirm
                </Button>
              </div>
          }
        </form>

      </Content>
    )
  }
}

export default connect(
  () => ({})
)(Add)
