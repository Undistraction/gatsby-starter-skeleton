import { injectGlobal } from 'styled-components';
import styledMQ from 'styled-mq';
import COLOURS from './colours';
import FONTS from './fonts';
import units from '../../api/units';
import rhythm from '../../api/rhythm';
import WIDTH_BREAKPOINTS from './breakpoints';

// Configure breakpoints

const breakpoints = {
  width: {
    [WIDTH_BREAKPOINTS.SMALL]: 400, // 0–400
    [WIDTH_BREAKPOINTS.MEDIUM]: 900, // 400–900
    [WIDTH_BREAKPOINTS.LARGE]: 1100, // 900–1100
    [WIDTH_BREAKPOINTS.XLARGE]: 1300, // 1100–1300
  },
};

const { query, aboveWidth } = styledMQ.configure(breakpoints);
const qs = {
  aboveMediumWidth: query(aboveWidth(WIDTH_BREAKPOINTS.MEDIUM)),
  aboveLargeWidth: query(aboveWidth(WIDTH_BREAKPOINTS.LARGE)),
};

// Configure output units
const { pxToRem } = units(10);
const rtm = rhythm(22, pxToRem);

// Apply global styles
/* eslint-disable no-unused-expressions */
injectGlobal`
  html {
    background-color: ${COLOURS.white};
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
`;

export default {
  rtm,
  qs,
  bg: COLOURS.black,
  text: COLOURS.black,
  highlight: COLOURS.orangeRed,
};
