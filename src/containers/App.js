import React from 'react'
import { hot } from 'react-hot-loader/root'
import styled from 'styled-components'
import CssReset from '../components/CssReset'
import AppCss from '../components/AppCss'
import Cover from './Cover'

const Container = styled.div`
  height: 100%;
`

const App = () => (
  <Container>
    <CssReset />
    <AppCss />
    <Cover />
  </Container>
)

export default hot(App)
