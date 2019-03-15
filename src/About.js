import React from 'react'
import { connect } from 'react-redux'
import {
  Row,
  Col
} from 'reactstrap'
import styled from 'styled-components'

import AboutWarpper from './SectionContainer'
import BlockTitle from './BlockTitle'
import Loading from './Loading'

const ReactMarkdown = require('react-markdown')

const FadeInWrapper = styled(Row)`
  opacity: 0;
  transition: opacity 1s;
  transition-delay: ${({ delay }) => delay + 's'};
  &.active {
    opacity: 1;
  }
`

const AboutContent = styled.div`
  white-space: pre-line;
  margin-left: 40px;
  @media (max-width: 576px) {
    margin-left: 0;
  }
`

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  componentDidMount () {
    fetch(`${process.env.PUBLIC_URL}/content/about.md`).then((res) => {
      return res.text()
    }).then((content) => {
      this.setState({
        content
      })
    })
  }

  render () {
    return (
      <AboutWarpper active={this.props.active} zindex={95}>
        <FadeInWrapper className={this.props.active ? 'active' : ''} delay={0.5}>
          <Col md={12}>
            <BlockTitle
              icon='info'
              title='關於我'
            />
          </Col>
        </FadeInWrapper>
        <FadeInWrapper className={this.props.active ? 'active' : ''} delay={1}>
          <Col>
            <AboutContent>
              { !this.state.content
                ? <Loading />
                : <ReactMarkdown className='About__content' source={this.state.content} />
              }
            </AboutContent>
          </Col>
        </FadeInWrapper>
      </AboutWarpper>
    )
  }
}

const mapStateToProps = state => ({
  active: state.section.name === 'About'
})

export default connect(mapStateToProps)(About)
