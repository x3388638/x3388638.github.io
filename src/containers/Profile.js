import React from 'react'
import styled, { keyframes } from 'styled-components'
import profileImg from '../../assets/profile_sm.jpg'

const Container = styled.div`
  margin: 25vh auto 0;
  width: max-content;
  text-align: center;
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Avatar = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  box-shadow: 0px 0px 20px 5px;
  opacity: 0;
  animation: ${fadeIn} cubic-bezier(0, 0, 0.2, 1) 1.5s forwards;
  animation-delay: 0.5s;
`

const Name = styled.div`
  color: #f3f3f3;
  padding: 30px 0;
  font-size: 26px;
  font-weight: bold;
  opacity: 0;
  animation: ${fadeIn} cubic-bezier(0, 0, 0.2, 1) 1.5s forwards;
  animation-delay: 1s;
`

const Profile = () => {
  return (
    <Container>
      <Avatar src={profileImg} alt="YY Chang" />
      <Name>YY</Name>
    </Container>
  )
}

export default Profile
