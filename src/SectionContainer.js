import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: -100vh;
  transition: top .5s;
  z-index: ${({ zindex }) => zindex};
  &.active {
    top: 0;
  }
`

const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  color: var(--dark);
`

export default ({ active, zindex, children }) => (
  <Wrapper className={active ? 'active' : ''} zindex={zindex}>
    <Main>
      { children }
    </Main>
  </Wrapper>
)
