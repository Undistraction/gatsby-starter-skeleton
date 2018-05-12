import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { pagination, pluralise } from '../helpers/formatting'
import { markdownItemNodes } from '../helpers/markdown'
import {
  articlesPageMetadata,
  articlesResourceTitle,
} from '../helpers/siteMetadata'
import Articles from '../shared/Articles'
import Metadata from '../shared/Metadata'
import NextPreviousNav from '../shared/NextPreviousNav'
import Page from '../shared/Page'

const Meta = styled.header`
  text-align: center;
`

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
    <Page title={pluralise(articlesResourceTitle(data))} nav={nav}>
      <Metadata {...articlesPageMetadata(data)} />
      <Meta>{pagination(pathContext)}</Meta>
      <Articles articles={markdownItemNodes(data)} pagination={pathContext} />
    </Page>
  )
}
ArticlesPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export default ArticlesPage
