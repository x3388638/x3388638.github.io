import React from 'react'
import { Provider } from 'react-redux'
import { Container } from 'reactstrap'
import Jumbo from './Jumbo'
import About from './About'
import Skill from './Skill'
import store from './store'

export default () => (
  <Provider store={store}>
    <Container fluid style={{ position: 'relative' }}>
      <Jumbo />
      <About />
      <Skill />
    </Container>
  </Provider>
)
