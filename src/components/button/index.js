// import classNames from 'classnames'
import React from 'react'
// import PropTypes from 'prop-types'

import Copy from 'components/copy'

import styles from './styles.sass'

const Button = ({
  children,
  primary,
  type,
  raised,
  ...rest
}) => (
  <button
    {...rest}
    className={`
      ${styles.base}
      ${primary ? styles.primary : ''}
      ${raised ? styles.raised : ''}
    `}
    type={type}>
    {/*
    className={classNames(
      styles.base,
      {
        [styles.primary]: primary,
        [styles.raised]: raised
      }
    )}
    */}
    <div className={styles.inner}>
      <Copy
        className={styles.label}
        type='button'>
        {children}
      </Copy>
    </div>
  </button>
)

// Button.propTypes = {
//   primary: PropTypes.bool.isRequired
// }
//
// Button.defaultProps = {
//   primary: false
// }
//
// Button.displayName = 'Button'

export default Button
