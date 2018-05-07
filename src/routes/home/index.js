import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import Content from 'components/content'
import Title from 'components/title'
import Copy from 'components/copy'
import RoundButton from 'components/round-button'

import styles from './styles.sass'

export default ({history}) => (
  <div className={styles.wrapper}>
    <Content className={styles.content}>
      <Title>
        Residue Calculator
      </Title>
      <nav className={styles.nav}>
        <Link
          to='/farms'
          className={styles.link}>
          <Copy type='subtitle'>
            Your Farms
          </Copy>
          <RoundButton
            className={styles.go}
            type='go' />
        </Link>
        <Link
          to='/fields'
          className={styles.link}>
          <Copy type='subtitle'>
            Your Fields
          </Copy>
          <RoundButton
            className={styles.go}
            type='go' />
        </Link>
        <Link
          to='/photos'
          className={styles.link}>
          <Copy type='subtitle'>
            Your Photos
          </Copy>
          <RoundButton
            className={styles.go}
            type='go' />
        </Link>
      </nav>
      <button
        className={styles.action}>
        <Copy
          className={styles['action-text']}
          type='subtitle'>
          <i className={classnames(
            'material-icons',
            styles.icon
          )}>
            photo_camera
          </i>
          Take a Photo
        </Copy>
      </button>
    </Content>
  </div>
)
