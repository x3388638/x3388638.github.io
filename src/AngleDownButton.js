import React from 'react'
import styled, { keyframes } from 'styled-components'

const upDown = keyframes`
  0% {
    bottom: 20px;
    font-size: 45px;
  }
  50% {
    bottom: 10px;
    font-size: 40px;
  }
  100% {
    bottom: 20px;
    font-size: 45px;
  }
`

const AngleDownButton = styled.div`
  color: ${({ color }) => color || 'rgba(243, 243, 243, 0.5)'};
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 10px;
  font-size: 40px;
  text-align: center;
  animation: ${upDown} .8s linear infinite;
  & i {
    cursor: pointer;
  }
`

export default ({ handleClick, color }) => (
  <AngleDownButton color={color}>
    <i className='fa fa-angle-double-down' aria-hidden='true' onClick={handleClick} />
  </AngleDownButton>
)
