import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: fixed;
  top: 10vh;
  left: calc((100vw - 500px) / 2);
  width: 500px;
  height: 70vh;
  background: red;
`

const ProjectModal = () => {
  return createPortal(<Container>a</Container>, document.body)
}

ProjectModal.propTypes = {
  onClose: PropTypes.func
}

export default ProjectModal
