import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Metadata = ({ title, description, keywords }) => (
  <Helmet
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        name: `keywords`,
        content: keywords,
      },
    ]}
  />
)

Metadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
}

Metadata.defaultProps = {
  keywords: ``,
}

export default Metadata
