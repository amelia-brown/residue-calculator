import React from 'react'
import { withRouter } from 'react-router-dom'

import Content from 'components/content'
import Title from 'components/title'
import Button from 'components/button'

import styles from './styles.sass'

const Home = ({history}) => (
  <div className={styles.wrapper}>
    <Content className={styles.content}>
      <Title>
        Residue Calculator
      </Title>
      <nav className={styles.nav}>
        <Button
          primary
          onClick={() => history.push('/new-photo')}
          className={styles.button}>
          New Photo
        </Button>
        <Button
          primary
          onClick={() => history.push('/farms')}
          className={styles.button}>
          Your Farms
        </Button>
        <Button
          primary
          onClick={() => history.push('/photos')}
          className={styles.button}>
          Your Photos
        </Button>
      </nav>
    </Content>
  </div>
)

export default withRouter(Home)
