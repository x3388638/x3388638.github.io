import React from 'react'
import { hot } from 'react-hot-loader/root'
import styled from 'styled-components'
import CssReset from '../components/CssReset'
import bg from '../../static/bg.jpg'
import Profile from './Profile'

const Container = styled.div`
  display: inline-block;
  background: #333;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100%;
  position: absolute;
  width: 100vw;
`

const App = () => {
  return (
    <Container>
      <CssReset />
      <Profile />
    </Container>
  )
}

export default hot(App)
