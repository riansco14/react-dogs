import { Feed } from 'components/Feed'
import React from 'react'
import { Container } from './styles'

export function Home() {
  return (<Container className='container'>
    <Feed />
  </Container>)
}
