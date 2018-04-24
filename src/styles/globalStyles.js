import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default api =>
  /* eslint-disable no-unused-expressions */
  injectGlobal`

    /* ---------------------------------------------------------------------- */
    /* Normalize Styles
    /* ---------------------------------------------------------------------- */

    ${styledNormalize}

    /* ---------------------------------------------------------------------- */
    /* Reset Box Sizing
    /* ---------------------------------------------------------------------- */

    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    /* ---------------------------------------------------------------------- */
    /* Page Setup
    /* ---------------------------------------------------------------------- */

    html {
      ${api.backgroundColor('c:bg')}
      overflow-y: scroll;
      overflow-x: hidden;
    }

    body {
      ${api({
        backgroundColor: ['c:bg'],
      })}
    }

    /* ---------------------------------------------------------------------- */
    /* Typography
    /* ---------------------------------------------------------------------- */

    body {
      ${api({
        fontFamily: ['f:all'],
        baseline: ['scale:body'],
      })}
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
      ${api({
        marginTop: ['1ru'],
      })}
    }

    /* ---------------------------------------------------------------------- */
    /* Headers
    /* ---------------------------------------------------------------------- */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      ${api({
        baseline: ['s:body'],
        fontWeight: ['normal'],
        margin: [0],
      })}
    }


    /* ---------------------------------------------------------------------- */
    /* Prism Syntax Hightlightling
    /* ---------------------------------------------------------------------- */

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
