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
    // className: classNames(
    //  styles.base,
    //  styles[type],
    //  {
    //    [styles.dark]: dark
    //  },
    //  className
    // )
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

// Copy.defaultProps = {
//  type: 'body'
// }

// Copy.propTypes = {
//   type: PropTypes.oneOf(Object.keys(ELEMENTS))
// }

export default Copy
