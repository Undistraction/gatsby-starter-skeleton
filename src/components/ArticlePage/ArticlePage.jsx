// eslint-disable react/no-danger

import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../../components/Metadata'
import Page from '../../components/Page'
import Article from '../Article'

const ArticlePage = ({ data }) => {
  const article = data.markdownRemark
  const { metadata } = article.fields
  const { frontmatter } = article

  return (
    <Page title={frontmatter.title}>
      <Metadata metadata={metadata} />
      <Img sizes={frontmatter.image.childImageSharp.sizes} />
      <Article data={data} />
    </Page>
  )
}

ArticlePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default ArticlePage
