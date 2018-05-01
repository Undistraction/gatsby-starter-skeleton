import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import Articles from './Articles'

const ArticlesPage = ({ data, pathContext }) => {
  const metadata = data.site.siteMetadata.metadata.articles
  return (
    <Page title={metadata.title} hasImage={false}>
      <Metadata {...metadata} />
      <Articles context={pathContext} />
    </Page>
  )
}

ArticlesPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
}

export default ArticlesPage
