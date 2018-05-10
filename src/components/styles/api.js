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
      primaryTitle: `34`,
      secondaryTitle: `18`,
      contentPrimaryTitle: `32`,
      contentSecondaryTitle: `24`,
      contentTertiaryTitle: `18`,
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
      red: `#EA421B`,
      // Aliases
      // - Default
      backgroundStart: `c:lightGrey`,
      backgroundStop: `c:white`,
      text: `c:black`,
      highlight: `c:red`,
      disabled: `c:offWhite`,
      // - Inverted
      backgroundInvertedStart: `c:offBlack`,
      backgroundInvertedEnd: `c:black`,
      textInverted: `c:white`,
      activeInverted: `c:darkGrey`,
      highlightInverted: `c:highlight`,
      borderColor: `c:backgroundStart`,
    },
    font: {
      default: `Cousine, monospace`,
      title: `Berkshire Swash, cursive`,
    },
    gradient: {
      background: `linear-gradient(to bottom, c:backgroundStart, c:backgroundStop 18%)`,
      backgroundInverted: `linear-gradient(to bottom, c:backgroundInvertedStart, c:backgroundInvertedEnd)`,
      lightFade: `linear-gradient(to left ,transparent, c:borderColor 30%, c:borderColor 70%, transparent 100%)`,
    },
    border: {
      default: `1px solid c:lightGrey`,
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
            primaryTitle: `42`,
            secondaryTitle: `22`,
            contentPrimaryTitle: `42`,
            contentSecondaryTitle: `34`,
            contentTertiaryTitle: `28`,
            giant: `180`,
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
