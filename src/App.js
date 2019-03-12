import React from 'react'
import { Provider } from 'react-redux'
import { Container } from 'reactstrap'
import Jumbo from './Jumbo'
import store from './store'

export default () => (
  <Provider store={store}>
    <Container fluid>
      <Jumbo />
    </Container>
  </Provider>
)
