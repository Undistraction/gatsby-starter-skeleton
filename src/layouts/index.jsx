import graphql from 'graphql'
import React from 'react'
import PropTypes from 'prop-types'
import 'prismjs/themes/prism-twilight.css'
import '../styles/global.css'
import Site from '../components/Site'

const View = ({ children, data }) => <Site data={data}>{children}</Site>

View.propTypes = {
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

View.displayName = 'MainLayoutView'

export const query = graphql`
  query MainLayoutQuery {
    site {
      siteMetadata {
        owner
        title
        startYear
      }
    }
  }
`

export default View
