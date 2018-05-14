import React from 'react'

import Content from 'components/content'
import Title from 'components/title'
import Button from 'components/button'

export default () => (
  <Content>
    <Title>
      Continue through Facebook
    </Title>

    <a href='/api/login'>
      <Button primary>
        Sign in
      </Button>
    </a>
  </Content>
)
