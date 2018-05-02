import PropTypes from 'prop-types'
import React from 'react'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import Articles from './Articles'
import {
  articlesPageMetadata,
  articlesPageTitle,
} from '../helpers/siteMetadata'
import { markdownItems } from '../helpers/text'

const ArticlesPage = ({ data, pathContext }) => (
  <Page title={articlesPageTitle(data)} hasImage={false}>
    <Metadata {...articlesPageMetadata(data)} />
    <Articles articles={markdownItems(data)} pagination={pathContext} />
  </Page>
)
ArticlesPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
}

export default ArticlesPage
