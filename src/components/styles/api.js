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

const rhythm = 28

const config = {
  breakpoints,
  data: {
    rhythm,
    baseline: {
      lineHeight: rhythm, // Baseline height
    },
    color: {
      // Colours
      black: `#070707`,
      offBlack: `#222`,
      white: `#F5F5F5`,
      offWhite: `#EFEFEF`,
      lightGrey: `#E4E4E4`,
      grey: `#AAA`,
      darkGrey: `#888`,
      // Aliases
      // - Default
      backgroundStart: `c:lightGrey`,
      backgroundEnd: `c:white`,
      text: `c:black`,
      highlight: `c:grey`,
      disabled: `c:offWhite`,
      // - Inverted
      backgroundInvertedStart: `c:offBlack`,
      backgroundInvertedEnd: `c:black`,
      textInverted: `c:white`,
      activeInverted: `c:darkGrey`,
      highlightInverted: `c:grey`,
    },
    scale: {
      smallprint: `14`,
      body: `18`,
      secondaryTitle: `20`,
      primaryTitle: `28`,
      megaTitle: `32`,
      giant: `80`,
    },
    font: {
      default: `Cousine, monospace`,
      title: `Berkshire Swash, cursive`,
    },
    gradient: {
      background: `linear-gradient(to bottom, c:backgroundStart, c:backgroundEnd 18%)`,
      backgroundInverted: `linear-gradient(to bottom, c:backgroundInvertedStart, c:backgroundInvertedEnd)`,
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
