import graphql from 'graphql'
import React from 'react'
import PropTypes from 'prop-types'
import 'prismjs/themes/prism-twilight.css'
import '../components/styles/global.css'
import Site from '../components/Site'

const IndexLayout = ({ children, data }) => <Site data={data}>{children}</Site>

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
      }
    }
  }
`

export default IndexLayout
