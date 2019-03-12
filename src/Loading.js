import React from 'react'
import { PulseLoader } from 'react-spinners'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  width: 100%;
  text-align: center;
`

export default class Loading extends React.Component {
  render () {
    return (
      <LoadingWrapper>
        <PulseLoader
          loading
          color='#d3d3d3'
          size={12}
          margin='5px'
        />
      </LoadingWrapper>
    )
  }
}
