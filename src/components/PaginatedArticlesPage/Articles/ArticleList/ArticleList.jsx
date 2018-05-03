import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV'
import uiList from '../../../styles/mixins/uiList'
import ArticlesListItem from './ArticlesListItem'

import renderListItems from '../../../helpers/renderListItems'

const Layout = styled.ul`
  ${uiList};
  ${spaceChildrenV([`1ru`])};
`

const ArticlesList = ({ articles }) => (
  <Layout>{renderListItems(ArticlesListItem, `article`, articles)}</Layout>
)

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
}

export default ArticlesList
