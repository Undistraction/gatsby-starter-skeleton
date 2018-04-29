import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../../components/Metadata'
import Page from '../../components/Page'
import config from '../../config'
import loadMetadata from '../../utils/loadMetadata'
import Articles from '../Articles/Articles'

const ArticlesPage = ({ pathContext }) => (
  <Page title={config.structure.articles.name} hasImage={false}>
    <Metadata metadata={loadMetadata('articles')} />
    <Articles context={pathContext} />
  </Page>
)

ArticlesPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
}

export default ArticlesPage
