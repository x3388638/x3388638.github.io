import React from 'react'
import { Row } from 'reactstrap'
import styled, { keyframes } from 'styled-components'

import SETTINGS from './settings'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const JumboWrapper = styled(Row)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url(${process.env.PUBLIC_URL}/bg.jpg) no-repeat center fixed;
  background-size: cover;
  @media screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
`

const JumboContainer = styled.div`
  flex: 1;
  padding-top: 50px;
  padding-bottom: 200px;
  text-align: center;
`

const JumboProfileImg = styled.img`
  height: 180px;
  border-radius: 120px;
  box-shadow: 0 0 20px 5px;
`

const JumboName = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  color: var(--light);
  font-size:30px;
  text-shadow: 0 0 20px #000;
  animation: ${fadeIn} .5s linear;
`

const JumboSocialLinkWrapper = styled.div`
  animation: ${fadeIn} .5s linear;
`

const JumboSocialLink = styled.a`
  &,
  &:hover,
  &:visited {
    display: inline-block;
    color: var(--light);
    font-size: 14px;
    font-weight: 100;
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;
    text-shadow: 0 0 1px #000;
  }
`

// const CalendarContainer = styled.div`
//   margin-top: 20px;
//   @media (max-width: 750px) {
//     display: none;
//   }
// `

// const CalendarText = styled.div`
//   color: #696969;
//   font-size: 12px;
//   @media (max-width: 750px) {
//     display: none;
//   }
// `

export default class Jumbo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      calendar: null
    }

    this.getCalendar = this.getCalendar.bind(this)
  }

  componentDidMount () {
    this.getCalendar()
  }

  getCalendar () {
    fetch(`https://moli.rocks:774/graph/${SETTINGS.githubAccount}`)
      .then((res) => res.text())
      .then((calendar) => {
        this.setState({
          calendar
        })
      })
  }

  render () {
    return (
      <JumboWrapper>
        <JumboContainer md={12}>
          <div>
            <JumboProfileImg src={`${process.env.PUBLIC_URL}/profile.jpg`} alt='profile' />
          </div>
          { SETTINGS.name &&
            <JumboName>
              <span>{ SETTINGS.name }</span>
            </JumboName>
          }
          <JumboSocialLinkWrapper>
            { SETTINGS.githubAccount &&
              <JumboSocialLink href={`https://github.com/${SETTINGS.githubAccount}`} rel='noopener noreferrer' target='_blank'>
                <i className='fa fa-github-square' /> GitHub
              </JumboSocialLink>
            }
            { SETTINGS.linkedinURL &&
              <JumboSocialLink href={SETTINGS.linkedinURL} rel='noopener noreferrer' target='_blank'>
                <i className='fa fa-linkedin-square' /> LinkedIn
              </JumboSocialLink>
            }
            { SETTINGS.email &&
              <JumboSocialLink href={`mailto:${SETTINGS.email}`}>
                <i className='fa fa-envelope-open' /> Email
              </JumboSocialLink>
            }
          </JumboSocialLinkWrapper>
        </JumboContainer>

        {/* this.state.calendar &&
          <JumboContainer className='github-calendar-graph' md={12}>
            <CalendarContainer dangerouslySetInnerHTML={{ __html: this.state.calendar }} />
            <CalendarText>GitHub Contribution</CalendarText>
          </JumboContainer>
        */}
      </JumboWrapper>
    )
  }
}
