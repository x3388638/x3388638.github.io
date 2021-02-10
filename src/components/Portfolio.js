import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Carousel from 'react-grid-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faCodeBranch,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons'
import projectList from '../../static/projects.json'
import ProjectCard from './ProjectCard'

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

const CardTitle = styled.a`
  color: inherit;
  text-decoration: inherit;
`

const ShowMore = styled.a`
  font-size: 16px;
  color: inherit;
  text-decoration: none;
`

const StretchBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const CardReaction = styled.div`
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

const Portfolio = ({
  projectCardCount = Number.MAX_SAFE_INTEGER,
  showMore = false
}) => {
  const [projects, setProjects] = useState(projectList)
  const projectsShowInCarousel = useMemo(
    () => projects.slice(0, projectCardCount),
    [projects, projectCardCount]
  )

  useEffect(() => {
    Promise.all(
      projectsShowInCarousel.map(project => {
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
          .then(res => {
            if (res.ok) {
              return res.json()
            }

            throw Error()
          })
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
        gap={8}
        responsiveLayout={[
          {
            breakpoint: 899,
            cols: 2
          }
        ]}
      >
        {projectsShowInCarousel.map(
          ({ link, name, repo, stars, forks, desc }, i) => (
            <Carousel.Item key={i}>
              <ProjectCard backdropImg={RANDOM_IMAGES[i]}>
                <CardTitle
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{name}</span>
                  <StretchBox />
                </CardTitle>
                {repo && Number.isInteger(stars) && Number.isInteger(forks) && (
                  <CardReaction>
                    <span>
                      <FontAwesomeIcon icon={faStar} /> {stars}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCodeBranch} /> {forks}
                    </span>
                  </CardReaction>
                )}
                <CardDesc>
                  <span>{desc}</span>
                </CardDesc>
              </ProjectCard>
            </Carousel.Item>
          )
        )}
        {showMore && (
          <Carousel.Item key="showMore">
            <ProjectCard backdropColor="#5f9ea0">
              <ShowMore
                href="https://github.com/x3388638/x3388638/blob/master/README.md"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>
                  <FontAwesomeIcon icon={faLightbulb} />
                  {' Explore More'}
                </span>
                <StretchBox />
              </ShowMore>
            </ProjectCard>
          </Carousel.Item>
        )}
      </Carousel>
    </Container>
  )
}

Portfolio.propTypes = {
  projectCardCount: PropTypes.number,
  showMore: PropTypes.bool
}

export default Portfolio
