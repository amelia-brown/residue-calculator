import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.sass'

const FormField = ({
  label,
  value,
  onChange,
  className,
  placeholder,
  error
}) => (
  <div className={classNames(styles.base, className)}>
    <span className={styles.label}>
      {label}
    </span>
    <input className={styles.input} />
    {
      error &&
        <span className={styles.error}>
          {error}
        </span>
    }
  </div>
)

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
