import React from 'react'
import { hot } from 'react-hot-loader/root'
import styled from 'styled-components'
import CssReset from '../components/CssReset'
import AppCss from '../components/AppCss'
import Cover from './Cover'
import bg from '../../static/bg.jpg'

const Container = styled.div`
  height: 100%;
  background: #333;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
`

const App = () => (
  <Container>
    <CssReset />
    <AppCss />
    <Cover />
  </Container>
)

export default hot(App)
