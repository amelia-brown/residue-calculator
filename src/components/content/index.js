// import classNames from 'classnames'
// import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.sass'

const Content = ({children, className}) => (
  <div className={`${styles.base} ${className}`}>
    {/* classNames(styles.base, className)}> */}
    {children}
  </div>
)

Content.displayName = 'Content'

// Content.propTypes = {
//  className: PropTypes.string
// }

export default Content
