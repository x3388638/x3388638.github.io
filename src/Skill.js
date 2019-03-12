import React from 'react'
import {
  Col,
  Row,
  Card
} from 'reactstrap'
import styled from 'styled-components'

import SkillWrapepr from './SectionContainer'
import BlockTitle from './BlockTitle'
import Loading from './Loading'

const CardLabelWrapper = styled.div`
  margin-bottom: 20px;
`

const CardLabelContent = styled.span`
  position: absolute;
    left: -10px;
    top: 10px;
    display: inline-block;
    background: ${(props) => `var(--${props.color})`};
    width: 50px;
  text-align: center;
  color: var(--light);
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    right: -15px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 0 12px 15px;
    border-color: ${(props) => `transparent transparent transparent var(--${props.color})`};
  }
`

class CardLabel extends React.Component {
  render () {
    return (
      <CardLabelWrapper>
        <CardLabelContent color={this.props.color}>{ this.props.text }</CardLabelContent>
      </CardLabelWrapper>
    )
  }
}

const SkillCOntent = styled.div`
  margin-left: 40px;
  @media (max-width: 576px) {
    margin-left: 0;
  }
`

const SkillBlock = styled(Col)`
  margin-bottom: 10px;
`

const SkillItem = styled(Col)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SkillText = styled.a`
  cursor: pointer;
  display: block;
  margin-bottom: 5px;
  &:hover {
    background: #f3f3f3;
  }
`

export default class Skill extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      skills: null
    }
  }

  componentDidMount () {
    fetch(`${process.env.PUBLIC_URL}/content/skill.json`).then(res => res.json()).then((skills) => {
      this.setState({
        skills
      })
    })
  }

  render () {
    return (
      <SkillWrapepr>
        <Row>
          <Col md={12}>
            <BlockTitle
              icon='code'
              title='技能專長'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SkillCOntent>
              { !this.state.skills &&
                <Loading />
              }
              { !!this.state.skills &&
                <Row>
                  <SkillBlock md={6}>
                    <Card body>
                      <CardLabel color='success' text='熟悉' />
                      { this.state.skills &&
                        <Row>
                          { this.state.skills[0].map((skill, i) => (
                            <SkillItem key={i} xs={6}>
                              <SkillText href={skill.link} target='_blank' rel='noopener noreferrer'>{skill.text}</SkillText>
                            </SkillItem>
                          ))}
                        </Row>
                      }
                    </Card>
                  </SkillBlock>
                  <SkillBlock md={6}>
                    <Card body>
                      <CardLabel color='yellow' text='略懂' />
                      { this.state.skills &&
                        <Row>
                          { this.state.skills[1].map((skill, i) => (
                            <SkillItem key={i} xs={6}>
                              <SkillText href={skill.link} target='_blank' rel='noopener noreferrer'>{skill.text}</SkillText>
                            </SkillItem>
                          ))}
                        </Row>
                      }
                    </Card>
                  </SkillBlock>
                </Row>
              }
            </SkillCOntent>
          </Col>
        </Row>
      </SkillWrapepr>
    )
  }
}
