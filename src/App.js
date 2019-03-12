import React, { Component } from 'react'
import {
  Container
} from 'reactstrap'

import Jumbo from './Jumbo'
import About from './About'
import Education from './Education'
import Skill from './Skill'
import Work from './Work'
import Project from './Project'
import Footer from './Footer'

export default class App extends Component {
  render () {
    return (
      <Container fluid>
        <Jumbo />
        <About />
        <Education />
        <Skill />
        <Work />
        <Project />
        <Footer />
      </Container>
    )
  }
}
