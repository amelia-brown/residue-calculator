import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.sass'

class FormField extends Component {
  state = {
    focus: false,
    error: false
  }

  handleFocus () {
    this.setState({
      focus: true,
      error: false
    })
  }

  handleBlur () {
    let error = false
    if (this.props.validate) {
      error = this.props.validate(this.props.value)
    }
    this.setState({
      focus: false,
      error: error
    })
  }

  render () {
    let {
      label,
      value,
      onChange,
      className
    } = this.props
    let placeholder = this.state.focus
      ? ''
      : label
    return (
      <div
        className={classNames(
          styles.base,
          className
        )}>

        <input
          onFocus={::this.handleFocus}
          onBlur={::this.handleBlur}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={classNames(
            styles.input,
            {
              [styles['input-active']]: this.state.focus,
              [styles['input-error']]: this.state.error
            }
          )} />

        <label
          className={classNames(
            styles.label,
            {
              [styles['label-active']]: this.state.focus,
              [styles['label-error']]: this.state.error
            }
          )}>
          {label}
        </label>

        {
          this.state.error &&
            <span className={styles.error}>
              {this.state.error}
            </span>
        }

      </div>
    )
  }
}

FormField.displayName = 'FormField'

FormField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default FormField
