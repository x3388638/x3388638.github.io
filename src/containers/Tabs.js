import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 10px;
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

  const handleToggleTab = useCallback(() => {
    setActiveTab(activeTab => {
      const nextTab = activeTab === EXPERIENCE ? PORTFOLIO : EXPERIENCE
      startContentAnimation(nextTab)
      return nextTab
    })
  }, [])

  return (
    <Container>
      <Head>
        <Tab onClick={handleToggleTab} active={activeTab === EXPERIENCE}>
          EXPERIENCE
        </Tab>
        <Tab onClick={handleToggleTab} active={activeTab === PORTFOLIO}>
          PORTFOLIO
        </Tab>
      </Head>
      <Body fadeOut={isContentFadeOut}>
        <Content active={activeContent === EXPERIENCE}>123</Content>
        <Content active={activeContent === PORTFOLIO}>
          456
          <br />
          678890
        </Content>
      </Body>
    </Container>
  )
}

export default Tabs
