import React from 'react'
import { hot } from 'react-hot-loader/root'
import styled from 'styled-components'
import CssReset from '../components/CssReset'
import bg from '../../assets/bg.jpg'
import Profile from './Profile'

const Container = styled.div`
  display: inline-block;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
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
