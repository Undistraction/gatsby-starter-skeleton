import graphql from 'graphql'
import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Site from '../components/Site'
import theApi from '../components/styles/api'
import '../components/styles/global.css'
import '../components/styles/prism-greyscale-theme.css'

// Note: VSCode currently doesn't respect object prop one-liner and removes
// import, so we need to rename the prop. This is already fixed in the repo and
// can be removed on next vscode releaase.
const theme = {
  api: theApi,
}

const IndexLayout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Site data={data}>{children}</Site>
  </ThemeProvider>
)

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query MainLayoutQuery {
    site {
      siteMetadata {
        data {
          owner
          title
          startYear
          showCredit
        }
        structure {
          resources {
            projects {
              title
              navTitle
              path
            }
            articles {
              title
              navTitle
              path
            }
          }
          pages {
            about {
              title
              navTitle
              path
            }
            home {
              title
              navTitle
              path
            }
          }
        }
      }
    }
  }
`

export default IndexLayout
