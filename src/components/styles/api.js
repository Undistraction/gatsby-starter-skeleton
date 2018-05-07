import createApi from 'cssapi'
import globalStyles from './globalStyles'

// -----------------------------------------------------------------------------
// Define Breakpoints
// -----------------------------------------------------------------------------

const BREAKPOINT_NAMES = Object.freeze({
  SMALL_UP: `smallUp`,
  MEDIUM_UP: `mediumUp`,
  LARGE_UP: `largeUp`,
})

const { SMALL_UP, MEDIUM_UP, LARGE_UP } = BREAKPOINT_NAMES

const breakpoints = [
  [SMALL_UP, 400], // 400–900
  [MEDIUM_UP, 900], // 900–1100
  [LARGE_UP, 1100], // 1100–
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
    scale: {
      smallprint: `10`,
      body: `14`,
      lede: `16`,
      secondaryTitle: `18`,
      primaryTitle: `24`,
      megaTitle: `28`,
      giant: `44`,
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
      highlight: `c:darkGrey`,
      disabled: `c:offWhite`,
      // - Inverted
      backgroundInvertedStart: `c:offBlack`,
      backgroundInvertedEnd: `c:black`,
      textInverted: `c:white`,
      activeInverted: `c:darkGrey`,
      highlightInverted: `c:grey`,
    },
    font: {
      default: `Cousine, monospace`,
      title: `Berkshire Swash, cursive`,
    },
    gradient: {
      background: `linear-gradient(to bottom, c:backgroundStart, c:backgroundEnd 18%)`,
      backgroundInverted: `linear-gradient(to bottom, c:backgroundInvertedStart, c:backgroundInvertedEnd)`,
    },
    // -------------------------------------------------------------------------
    // SCOPES
    // -------------------------------------------------------------------------
    scopes: [
      {
        resolve: [SMALL_UP, MEDIUM_UP, LARGE_UP],
        data: {
          rhythm,
          // baseline: {
          //   lineHeight: rhythm, // Baseline height
          // },
          scale: {
            smallprint: `14`,
            body: `18`,
            lede: `20`,
            secondaryTitle: `22`,
            primaryTitle: `28`,
            megaTitle: `32`,
            giant: `80`,
          },
        },
      },
    ],
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
