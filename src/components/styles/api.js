import createApi from 'cssapi'
import globalStyles from './globalStyles'

// -----------------------------------------------------------------------------
// Define Breakpoints
// -----------------------------------------------------------------------------

const breakpoints = [
  [`smallUp`, 400], // 400–900
  [`mediumUp`, 900], // 900–1100
  [`largeUp`, 1100], // 1100–
]

// -----------------------------------------------------------------------------
// Configure CSS API
// -----------------------------------------------------------------------------

const config = {
  breakpoints,
  data: {
    rhythm: 23,
    color: {
      black: `#070707`,
      white: `#F5F5F5`,
      grey: `#AAA`,
      lightGrey: `#E9E9E9`,
      bg: `c:white`,
      text: `c:black`,
      highlight: `c:grey`,
      disabled: `c:lightGrey`,
    },
    scale: {
      smallprint: `14`,
      body: `18`,
      secondaryTitle: `20`,
      primaryTitle: `28`,
      megaTitle: `32`,
      giant: `130`,
    },
    font: {
      default: `Cousine, monospace`,
      title: `Berkshire Swash, cursive`,
    },
  },
}

const api = createApi(config)

// -----------------------------------------------------------------------------
// Global Styles
// -----------------------------------------------------------------------------

globalStyles(api)

// -----------------------------------------------------------------------------
// Export Theme
// -----------------------------------------------------------------------------

export default api
