import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMedium,
  faGithubSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import profileImg from '../../assets/profile_sm.jpg'

const Container = styled.div`
  margin: 25vh auto 0;
  width: max-content;
  text-align: center;
  color: #f3f3f3;
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const scaleWidth = keyframes`
  from { width: 0; }
  to { width: 120px; }
`

const Avatar = styled.img`
  background: #666;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  box-shadow: 0px 0px 20px 5px #000;
  opacity: 0;
  animation: ${fadeIn} cubic-bezier(0, 0, 0.2, 1) 1.5s forwards;
  animation-delay: 0.5s;
`

const Name = styled.div`
  justify-content: center;
  align-items: baseline;
  padding: 30px 0 20px;
  font-size: 26px;
  font-weight: bold;
  text-shadow: #666 0px 0px 2px;
  opacity: 0;
  animation: ${fadeIn} cubic-bezier(0, 0, 0.2, 1) 1.5s forwards;
  animation-delay: 1s;
`

const Title = styled.span`
  text-align: left;
  font-size: 14px;
  font-weight: 200;
  display: inline-block;
  width: 0;
  padding-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${scaleWidth} cubic-bezier(0, 0, 0.2, 1) 1s forwards;
  animation-delay: 1.4s;
`

const Social = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, auto);
  opacity: 0;
  animation: ${fadeIn} cubic-bezier(0, 0, 0.2, 1) 1.5s forwards;
  animation-delay: 2s;

  & a {
    color: inherit;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
  }
`

const Profile = () => {
  return (
    <Container>
      <Avatar src={profileImg} alt="YY Chang" />
      <Name>
        <span>YY</span>
        <Title>- Web developer</Title>
      </Name>
      <Social>
        <a href="https://github.com/x3388638" target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} /> <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/yuyingchang/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span>
        </a>
        <a href="https://medium.com/@z3388638" target="_blank">
          <FontAwesomeIcon icon={faMedium} /> <span>Medium</span>
        </a>
      </Social>
    </Container>
  )
}

export default Profile
