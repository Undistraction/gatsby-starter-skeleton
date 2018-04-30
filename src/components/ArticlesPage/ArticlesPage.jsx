import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import config from '../../config'
import loadMetadata from '../../utils/loadMetadata'
import Articles from './Articles'

const ArticlesPage = ({ pathContext }) => (
  <Page title={config.structure.articles.name} hasImage={false}>
    <Metadata {...loadMetadata('articles')} />
    <Articles context={pathContext} />
  </Page>
)

ArticlesPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
}

export default ArticlesPage
