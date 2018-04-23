import { injectGlobal } from 'styled-components';
import FONTS from './fonts';
import COLOURS from './colours';

export default api =>
  /* eslint-disable no-unused-expressions */
  injectGlobal`
    html {
      ${api.backgroundColor('c:bg')}
      overflow-y: scroll;
      overflow-x: hidden;
    }

    body {
      font-family: ${FONTS.default.stack};
      color: ${COLOURS.black};
      
      /* Our default font-size */
      font-size: 1.6rem;
      line-height: 1.4;
    }

    /* Reset Box Sizing
    ========================================================================= */

    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    /* Typography
    ========================================================================= */

    :root {
      /* Now 1rem = 10px */
      font-size: 62.5%;
    }

    b,
    em {
      font-weight: bold;
    }

    i {
      font-weight: italic;
    }

    p {
      margin: 0;
      padding: 0;
      max-width: 60em;
    }

    p + p {
      margin-top: 2.2rem;
    }

    /* Headers
    ========================================================================= */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 2rem;
      font-weight: normal;
      margin-bottom: 2.2rem;
    }

    /* Prism Syntax Hightlighting Tweaks
    ========================================================================= */

    /**
    * Add back the container background-color, border-radius, padding, margin
    * and overflow that we removed from <pre>.
    */
    .gatsby-highlight {
      background-color: #2c2b28;
      border-radius: 0.3em;
      margin: 0.5em 0;
      padding: 1em;
      overflow: auto;
    }

    /**
    * Remove the default PrismJS theme background-color, border-radius, margin,
    * padding and overflow.
    * 1. Make the element just wide enough to fit its content.
    * 2. Always fill the visible space in .gatsby-highlight.
    */
    .gatsby-highlight pre[class*='language-'] {
      background-color: transparent;
      margin: 0;
      padding: 0;
      overflow: initial;
      float: left; /* 1 */
      min-width: 100%; /* 2 */
    }
`;
