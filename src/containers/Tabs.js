import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 20px 10px 30px;
  margin: 0 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;

  @media screen and (max-width: 767px) {
    margin: 0;
    border-radius: 0;
  }
`

const Head = styled.div`
  margin-bottom: 20px;
`

const Tab = styled.span`
  position: relative;
  cursor: pointer;
  margin: 0 20px;
  color: ${({ active }) => (active ? '#f3f3f3' : '#999')};

  &::after {
    content: '';
    display: inline-block;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -2px;
    background: white;
    transition: all 0.2s;
  }

  &:hover {
    color: #f3f3f3;

    &::after {
      width: 100%;
    }
  }
`

const Body = styled.div`
  opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)};
  transition: opacity 0.4s cubic-bezier(0, 0, 0.2, 1);
`

const Content = styled.div`
  display: ${({ active }) => (active ? 'initial' : 'none')};
`

const EXPERIENCE = 'EXPERIENCE'
const PORTFOLIO = 'PORTFOLIO'
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(EXPERIENCE)
  const [activeContent, setActiveContent] = useState(EXPERIENCE)
  const [isContentFadeOut, setIsContentFadeOut] = useState(false)

  const startContentAnimation = useCallback(nextTab => {
    setIsContentFadeOut(true)
    setTimeout(() => {
      setActiveContent(nextTab)
      setIsContentFadeOut(false)
    }, 450)
  }, [])

  useEffect(() => {
    startContentAnimation(activeTab)
  }, [activeTab])

  const handleTabClick = useCallback(nextTab => {
    setActiveTab(nextTab)
  }, [])

  return (
    <Container>
      <Head>
        <Tab
          onClick={() => {
            handleTabClick(EXPERIENCE)
          }}
          active={activeTab === EXPERIENCE}
        >
          EXPERIENCE
        </Tab>
        <Tab
          onClick={() => {
            handleTabClick(PORTFOLIO)
          }}
          active={activeTab === PORTFOLIO}
        >
          PORTFOLIO
        </Tab>
      </Head>
      <Body fadeOut={isContentFadeOut}>
        <Content active={activeContent === EXPERIENCE}>
          <Experience />
        </Content>
        <Content active={activeContent === PORTFOLIO}>
          <Portfolio />
        </Content>
      </Body>
    </Container>
  )
}

export default Tabs
