import { css, createGlobalStyle } from 'styled-components'

const style = css`
  html,
  body {
    height: 100%;
  }

  #app {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    height: 100%;
    width: 100%;
  }
`

export default createGlobalStyle(style)
