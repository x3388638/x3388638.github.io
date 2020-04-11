import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Carousel from 'react-grid-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import projectList from '../../static/projects.json'

let GITHUB_TOKEN
if (process.env.NODE_ENV === 'development') {
  try {
    GITHUB_TOKEN = require('../../.github_access_token')
  } catch {
    console.warn(
      'GitHub access token not found in .github_access_token, the capacity of github api call will be limited.'
    )
  }
}

const GITHUB_API = 'https://api.github.com'
const RANDOM_IMAGES = [...Array(projectList.length)]
  .map((_, i) => require(`../../static/project_bg/${i}.jpg`).default)
  .sort(() => Math.random() - 0.5)

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    margin: 0 -10px;
  }
`

const ProjectCard = styled.a`
  display: block;
  position: relative;
  transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
  margin: 5px;

  @media screen and (min-width: 768px) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: rgba(7, 7, 7, 0.5) 0px 5px 5px 0px;
    }
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  word-break: break-word;
  cursor: pointer;
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

const CardReacttion = styled.div`
  margin-top: 15px;
  font-size: 14px;

  span {
    margin: 0 5px;
  }
`

const CardDesc = styled.div`
  font-size: 13px;
  margin-top: 10px;
`

const Portfolio = () => {
  const [projects, setProjects] = useState(projectList)

  useEffect(() => {
    Promise.all(
      projects.map(project => {
        if (!project.repo) {
          return project
        }

        const options = GITHUB_TOKEN
          ? {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`
              }
            }
          : undefined

        return fetch(`${GITHUB_API}/repos/${project.repo}`, options)
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
            <ProjectCard href={project.link} target="_blank">
              <CardBackdrop img={RANDOM_IMAGES[i]} />
              <CardContent>
                <span>{project.name}</span>
                {project.repo && (
                  <CardReacttion>
                    <span>
                      <FontAwesomeIcon icon={faStar} /> {project.stars}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCodeBranch} /> {project.forks}
                    </span>
                  </CardReacttion>
                )}
                <CardDesc>
                  <span>{project.desc}</span>
                </CardDesc>
              </CardContent>
            </ProjectCard>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default Portfolio
