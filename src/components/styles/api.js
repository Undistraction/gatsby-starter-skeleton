import createApi from 'cssapi'

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
  [SMALL_UP, 600], // 900–1100
  [MEDIUM_UP, 900], // 900–1100
  [LARGE_UP, 1100], // 1100–
]

// -----------------------------------------------------------------------------
// Configure CSS API
// -----------------------------------------------------------------------------

const rhythmDefault = 21
const rhythmSmallUp = 28

const config = {
  breakpoints,
  data: {
    rhythm: rhythmDefault,
    baseline: {
      lineHeight: rhythmDefault, // Baseline height
    },
    scale: {
      '-1': 10,
      '0': 14,
      '1': 17,
      '2': 21,
      '3': 24,
      '4': 28,
      smallprint: `s:-1`,
      body: `s:0`,
      lede: `s:1`,
      secondaryTitle: `s:1`,
      contentTertiaryTitle: `s:2`,
      contentSecondaryTitle: `s:3`,
      primaryTitle: `s:4`,
      contentPrimaryTitle: `s:4`,
      giant: 120,
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
      active: `c:darkGrey`,
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
      title: `Berkshire Swash, cursive`,
      default: `Source Code Pro, monospace`,
    },
    gradient: {
      background: `linear-gradient(to bottom, c:backgroundStart, c:backgroundStop 15ru)`,
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
        resolve: [MEDIUM_UP, LARGE_UP],
        data: {
          rhythm: rhythmSmallUp,
          baseline: {
            lineHeight: rhythmSmallUp, // Baseline height
          },
          scale: {
            '-1': 12,
            '0': 18,
            '1': 22,
            '2': 28,
            '3': 33,
            '4': 38,
            smallprint: `s:-1`,
            body: `s:0`,
            lede: `s:1`,
            secondaryTitle: `s:1`,
            contentTertiaryTitle: `s:2`,
            contentSecondaryTitle: `s:3`,
            primaryTitle: `s:4`,
            contentPrimaryTitle: `s:4`,
            giant: 180,
          },
        },
      },
    ],
  },
}

const api = createApi(config)

// -----------------------------------------------------------------------------
// Export Theme
// -----------------------------------------------------------------------------

export default api
