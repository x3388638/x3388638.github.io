import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: -100vh;
  transition: top .5s;
  padding-top: 50px;
  z-index: ${({ zindex }) => zindex};
  &.active {
    top: 0;
  }
`

const Main = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 50px);
  padding-bottom: 200px;
  color: var(--dark);
`

export default ({ active, zindex, children }) => (
  <Wrapper className={active ? 'active' : ''} zindex={zindex}>
    <Main>
      { children }
    </Main>
  </Wrapper>
)
