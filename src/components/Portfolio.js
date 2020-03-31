import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Carousel from 'react-grid-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const GITHUB_API = 'https://api.github.com'
const PROJECTS = [
  {
    name: 'react-grid-carousel',
    repo: 'x3388638/react-grid-carousel',
    link: 'https://react-grid-carousel.now.sh/'
  },
  {
    name: 'KeBiau',
    repo: 'x3388638/KeBiau',
    link: 'https://2yc.tw/KeBiau/#/'
  },
  {
    name: 'dcard-images',
    repo: 'x3388638/dcard-images',
    link: 'https://github.com/x3388638/dcard-images'
  },
  {
    name: 'github-calendar-graph',
    repo: 'x3388638/github-calendar-graph',
    link: 'https://github.com/x3388638/github-calendar-graph'
  },
  {
    name: 'YahooAnswersSpamReport',
    repo: 'x3388638/YahooAnswersSpamReport',
    link: 'https://github.com/x3388638/YahooAnswersSpamReport'
  },
  {
    name: 'LANChat',
    repo: 'x3388638/LANChat',
    link: 'https://github.com/x3388638/LANChat'
  },
  {
    name: 'PokemonMap-for-GoPatrol',
    repo: 'x3388638/PokemonMap-for-GoPatrol',
    link: 'https://github.com/x3388638/PokemonMap-for-GoPatrol'
  },
  {
    name: 'PKGET userscript w/ Telegram notification',
    link: 'https://hackmd.io/s/SJOrobrA'
  },
  {
    name: 'RO xmas event userscript',
    link: 'https://hackmd.io/s/B1pB-7j-z'
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

const Portfolio = () => {
  const [projects, setProjects] = useState(PROJECTS)

  useEffect(() => {
    Promise.all(
      projects.map(project => {
        if (!project.repo) {
          return project
        }

        return fetch(`${GITHUB_API}/repos/${project.repo}`, {
          headers: {
            Authorization: 'token 0e0c8b38fefbe2cd790480491e297ec8892bf2d4'
          }
        })
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
              </CardContent>
            </ProjectCard>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default Portfolio
