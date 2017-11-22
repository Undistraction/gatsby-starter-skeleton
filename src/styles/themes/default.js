import mq from 'styled-mq';
import rhythm from '../rhythm';
import WIDTH_BREAKPOINTS from './breakpoints';

/* eslint-disable no-unused-vars */
const trueBlack = '#000';
const trueWhite = '#FFF';
const black = '#070707';
const white = '#F5F5F5';
/* eslint-enable no-unused-vars */

const widthBreakpoints = {
  [WIDTH_BREAKPOINTS.SMALL]: 400, // 0–400
  [WIDTH_BREAKPOINTS.MEDIUM]: 900, // 400–900
  [WIDTH_BREAKPOINTS.LARGE]: 1100, // 900–1100
  [WIDTH_BREAKPOINTS.XLARGE]: 1300, // 1100–1300
};

export default {
  siteBackgroundColor: white,
  baseTextColor: black,
  rhythm: rhythm(),
  mq: mq.configure(widthBreakpoints),
};
