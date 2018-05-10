import PropTypes from 'prop-types'
import React from 'react'
import { markdownItemNodes } from '../helpers/markdown'
import {
  articlesPageMetadata,
  articlesPageTitle,
} from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import NextPreviousNav from '../shared/NextPreviousNav'
import Page from '../shared/Page'
import Articles from './Articles'

const ArticlesPage = ({ data, pathContext }) => {
  const { previousPath, nextPath } = pathContext

  const nav = (
    <NextPreviousNav
      previousLabel="Newer"
      previousPath={previousPath}
      nextLabel="Older"
      nextPath={nextPath}
    />
  )

  return (
    <Page title={articlesPageTitle(data)} nav={nav}>
      <Metadata {...articlesPageMetadata(data)} />
      <Articles articles={markdownItemNodes(data)} pagination={pathContext} />
    </Page>
  )
}
ArticlesPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export default ArticlesPage
