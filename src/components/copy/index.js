import classnames from 'classnames'
// import PropTypes from 'prop-types'
import { createElement } from 'react'

import styles from './styles.sass'

const ELEMENTS = {
  'label': 'p',
  'caption': 'p',
  'body': 'p',
  'button': 'p',
  'subtitle': 'h4',
  'title': 'h3',
  'subheading': 'h2',
  'heading': 'h1'
}

const Copy = ({
  children,
  className,
  dark,
  type
}) => createElement(
  ELEMENTS[type],
  {
    children,
    className: classnames(
      styles.base,
      styles[type],
      className,
      {
        [styles.dark]: dark
      }
    )
  }
)

export default Copy
