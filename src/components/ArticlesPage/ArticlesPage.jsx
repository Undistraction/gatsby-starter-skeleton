import PropTypes from 'prop-types'
import React from 'react'
import { markdownItemNodes } from '../helpers/markdown'
import {
  articlesPageMetadata,
  articlesPageTitle,
} from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import Articles from './Articles'

const ArticlesPage = ({ data, pathContext }) => (
  <Page title={articlesPageTitle(data)} hasImage={false}>
    <Metadata {...articlesPageMetadata(data)} />
    <Articles articles={markdownItemNodes(data)} pagination={pathContext} />
  </Page>
)
ArticlesPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export default ArticlesPage
