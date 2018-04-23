import createApi from 'cssapi';
import globalStyles from './globalStyles';
import COLOURS from './colours';
import WIDTH_BREAKPOINTS from './breakpoints';

// -----------------------------------------------------------------------------
// Define Breakpoints
// -----------------------------------------------------------------------------

const breakpoints = [
  [WIDTH_BREAKPOINTS.SMALL_UP, 400], // 400–900
  [WIDTH_BREAKPOINTS.MEDIUM_UP, 900], // 900–1100
  [WIDTH_BREAKPOINTS.LARGE_UP, 1100], // 1100–
];

// -----------------------------------------------------------------------------
// Configure CSS API
// -----------------------------------------------------------------------------

const config = {
  breakpoints,
  data: {
    color: {
      black: COLOURS.black,
      white: COLOURS.white,
      bg: 'c:white',
      text: 'c:black',
    },
  },
};

const api = createApi(config);

// -----------------------------------------------------------------------------
// Global Styles
// -----------------------------------------------------------------------------

globalStyles(api);

// -----------------------------------------------------------------------------
// Export Theme
// -----------------------------------------------------------------------------

export default {
  api,
  text: COLOURS.black,
  highlight: COLOURS.orangeRed,
};
