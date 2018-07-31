import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Site from '../Site'
import '../styles/global.css'
import '../styles/prism-greyscale-theme.css'
import theme from '../styles/theme'

const DefaultLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Site data={data}>{children}</Site>
      </ThemeProvider>
    )}
  />
)

DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default DefaultLayout
