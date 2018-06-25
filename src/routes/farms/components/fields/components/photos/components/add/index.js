import React, { Component } from 'react'
import classnames from 'classnames'

import Copy from 'components/copy'
import Content from 'components/content'
import Title from 'components/title'
import Button from 'components/button'

import styles from './styles'

export default class Add extends Component {
  state = {
    img: false,
    loading: false,
    error: false
  }

  onChange (e) {
    let file = e.target.files[0]
    let reader = new FileReader()

    reader.onload = ((file) => {
      return (e) => {
        this.setState({
          file: file,
          img: e.target.result,
          name: file.name,
          type: file.type
        })
      }
    })(file)

    reader.readAsDataURL(file)
  }

  handleConfirm = (e) => {
    e.preventDefault()
    this.setState({
      loading: true
    })
    this.getSignedRequest()
  }

  async getSignedRequest () {
    const {name, type} = this.state
    try {
      const resp = await fetch(
        `/api/sign-s3?file-name=${name}&file-type=${type}`,
        {
          headers: {'content-type': 'application/json'}
        }
      )
      const json = await resp.json()
      this.savePhoto(json.signedRequest, json.url)
    } catch (error) {
      this.setState({
        loading: false,
        error: true
      })
      console.log(error) // eslint-disable-line
    }
  }

  async savePhoto (signedRequest, url) {
    try {
      const response = await fetch(
        signedRequest,
        {
          method: 'put',
          headers: {'content-type': this.state.type},
          body: this.state.file
        }
      )

      await response.text()

      const tempUrl = encodeURIComponent(url)
      this.props.history.push(`${this.props.match.url}/edit?url=${tempUrl}`)
    } catch (error) {
      this.setState({
        loading: false,
        error: true
      })
      console.log(error) // eslint-disable-line
    }
  }

  render () {
    return (
      <Content
        className={classnames({
          [styles.loading]: this.state.loading
        })}>
        <Title>
          New Photo
        </Title>

        <form onSubmit={this.handleConfirm}>
          <label
            htmlFor='file-input'>
            <Button
              type='button'
              primary>
              Choose File
            </Button>
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
        {
          this.state.error &&
            <Copy type='body'>
              There was an error uploading the photo, please try again.
            </Copy>
        }

      </Content>
    )
  }
}
