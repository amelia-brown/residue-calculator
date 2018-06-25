import React from 'react'

import Content from 'components/content'
import Title from 'components/title'
import LinkButton from 'components/link-button'
import TextButton from 'components/text-button'

export default ({handleAnonLogin}) => (
  <Content>
    <Title>
      Continue through Facebook
    </Title>

    <LinkButton
      to='/api/login'
      primary
    >
      Sign in
    </LinkButton>
    <TextButton
      onClick={handleAnonLogin}>
      Continue without signing up
    </TextButton>
  </Content>
)
