import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: -100vh;
  transition: top .5s;
  z-index: 95;
  &.active {
    top: 0;
  }
`

const Main = styled(Container)`
  padding-top: 20px;
  color: var(--dark);
`

export default ({ active, children }) => (
  <Wrapper className={active ? 'active' : ''}>
    <Main>
      { children }
    </Main>
  </Wrapper>
)
