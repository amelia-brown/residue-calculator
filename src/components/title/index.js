import React from 'react'

import styles from './styles.sass'

const Title = ({children, className}) => (
  <h1 className={`${styles.base} ${className}`}>
    {children}
  </h1>
)

Title.displayName = 'Title'

export default Title
