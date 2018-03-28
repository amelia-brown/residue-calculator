import React from 'react'

import Copy from 'components/copy'

import styles from './styles.sass'

const getText = (type) => {
  let text
  switch (type) {
    case 'farm':
      text = 'You have not created any farms'
      break
    case 'field':
      text = 'This farm does not have any fields yet'
      break
    case 'photo':
      text = 'This field does not have any photos'
      break
    default:
      text = `You don't have any ${type} yet`
      break
  }
  return text
}

export default ({type}) => (
  <div className={styles.base}>
    <Copy type='body'>
      {getText(type)}
    </Copy>
  </div>
)
