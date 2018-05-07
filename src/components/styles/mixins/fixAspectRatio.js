import { css } from 'styled-components'

const fixAspectRatio = (width, height) => {
  const ratio = height / width * 100
  return css`
    position: relative;

    ::before {
      display: block;
      content: '';
      width: 100%;
      padding-bottom: ${ratio}%;
    }

    *:first-child {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `
}

export default fixAspectRatio
