import React from 'react'

import Content from 'components/content'
import Title from 'components/title'
import Copy from 'components/copy'
import Card from 'components/card'
import Button from 'components/button'
import TextButton from 'components/text-button'

import styles from './styles'

export default ({handleAnonLogin}) => (
  <Content>
    <Title>
      Residue Calculator
    </Title>

    <Card className={styles.card}>
      <Copy type='subtitle'>
        Continue with facebook
      </Copy>

      <a href='/api/login'>
        <Button
          className={styles.button}
          primary
        >
          Sign in
        </Button>
      </a>
      <TextButton
        onClick={handleAnonLogin}>
        or sign up later
      </TextButton>
    </Card>
  </Content>
)
