import React from 'react'

import Content from 'components/content'
import Title from 'components/title'
import Button from 'components/button'

import styles from './styles.sass'

export default ({history}) => (
  <div className={styles.wrapper}>
    <Content className={styles.content}>
      <Title>
        Residue Calculator
      </Title>
      <nav className={styles.nav}>
        <Button
          primary
          onClick={() => history.push('/farms')}
          className={styles.button}>
          Your Farms
        </Button>
      </nav>
    </Content>
  </div>
)
