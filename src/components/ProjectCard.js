import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  padding: 5px;
`

const Card = styled.div`
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    &:hover {
      transform: translate3d(0, -5px, 0);
      box-shadow: rgba(7, 7, 7, 0.5) 0px 5px 5px 0px;
    }
  }
`

const Backdrop = styled.div`
  height: 150px;
  background-image: ${({ img }) => (img ? `url(${img})` : 'unset')};
  background-color: ${({ color }) => (color ? color : 'unset')};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    height: 200px;
  }
`

const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  word-break: break-word;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  color: #f3f3f3;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);

  span {
    filter: drop-shadow(0px 2px 5px black);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 767px) {
    background: rgba(0, 0, 0, 0.1);
  }
`

const ProjectCard = ({ backdropImg, backdropColor, children }) => (
  <Container>
    <Card>
      <Backdrop img={backdropImg} color={backdropColor} />
      <ContentWrapper>{children}</ContentWrapper>
    </Card>
  </Container>
)

ProjectCard.propTypes = {
  backdropImg: PropTypes.string,
  backdropColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}

export default ProjectCard
