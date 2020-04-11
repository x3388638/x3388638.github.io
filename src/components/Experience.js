import React from 'react'
import styled from 'styled-components'
import experienceList from '../../static/experiences.json'

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

const Row = styled.a`
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  padding: 20px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
  color: inherit;
  text-decoration: inherit;
  transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.4);
    transform: translate3d(-3px, -3px, 0);
  }
`

const Logo = styled.div`
  width: 35px;
  height: 30px;
  border-radius: 4px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: sepia(0.3);
`

const Detail = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 10px;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const Company = styled.div`
  font-size: 14px;
  line-height: 16px;
`

const Duration = styled.div`
  font-size: 13px;
  line-height: 16px;
  font-weight: 300;
`

const Experience = () => {
  return (
    <Container>
      {experienceList.map((experience, i) => (
        <Row
          key={i}
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo
            img={
              require(`../../static/company_logo/${experience.id}.jpg`).default
            }
          />
          <Detail>
            <Title>{experience.title}</Title>
            <Company>{experience.company}</Company>
            <Duration>{experience.duration}</Duration>
          </Detail>
        </Row>
      ))}
    </Container>
  )
}

export default Experience
