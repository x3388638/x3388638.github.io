import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Carousel from 'react-grid-carousel'

const GITHUB_API = 'https://api.github.com'
const PROJECTS = [
  {
    name: 'react-grid-carousel',
    stars: null,
    forks: null,
    repo: 'x3388638/react-grid-carousel',
    link: 'https://react-grid-carousel.now.sh/'
  },
  {
    name: 'react-grid-carousel',
    stars: null,
    forks: null,
    link: 'https://react-grid-carousel.now.sh/'
  },
  {
    name: 'react-grid-carousel',
    stars: null,
    forks: null,
    link: 'https://react-grid-carousel.now.sh/'
  },
  {
    name: 'react-grid-carousel',
    stars: null,
    forks: null,
    link: 'https://react-grid-carousel.now.sh/'
  },
  {
    name: 'react-grid-carousel',
    stars: null,
    forks: null,
    link: 'https://react-grid-carousel.now.sh/'
  },
  {
    name: 'react-grid-carousel',
    stars: null,
    forks: null,
    link: 'https://react-grid-carousel.now.sh/'
  },
  {
    name: 'react-grid-carousel',
    stars: null,
    forks: null,
    link: 'https://react-grid-carousel.now.sh/'
  }
]

const RANDOM_IMAGES = [...Array(PROJECTS.length)]
  .map((_, i) => require(`../../static/project_bg/${i}.jpg`).default)
  .sort(() => Math.random() - 0.5)

const Container = styled.div`
  @media screen and (max-width: 767px) {
    margin: 0 -10px;
  }
`

const ProjectCard = styled.div`
  position: relative;
  transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  margin: 5px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(7, 7, 7, 0.5) 0px 5px 5px 0px;
  }
`

const CardBackdrop = styled.div`
  height: 150px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    height: 200px;
  }
`

const CardContent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 5px #000;
  font-size: 20px;
  cursor: pointer;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  color: #f3f3f3;
  transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 767px) {
    background: rgba(0, 0, 0, 0.3);
  }
`

const Portfolio = () => {
  const [projects, setProjects] = useState(PROJECTS)

  useEffect(() => {
    Promise.all(
      projects.map(project => {
        if (!project.repo) {
          return project
        }

        return fetch(`${GITHUB_API}/repos/${project.repo}`)
          .then(res => res.json())
          .then(data => {
            return {
              ...project,
              stars: data.stargazers_count,
              forks: data.forks_count
            }
          })
          .catch(() => project)
      })
    ).then(updatedProjects => {
      setProjects(updatedProjects)
    })
  }, [])

  return (
    <Container>
      <Carousel
        cols={3}
        rows={2}
        gap={0}
        responsiveLayout={[
          {
            breakpoint: 899,
            cols: 2
          }
        ]}
      >
        {projects.map((project, i) => (
          <Carousel.Item key={i}>
            <ProjectCard>
              <CardBackdrop img={RANDOM_IMAGES[i]} />
              <CardContent>{project.name}</CardContent>
            </ProjectCard>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default Portfolio
