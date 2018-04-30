import PropTypes from 'prop-types'
import { mapIndexed } from 'ramda-adjunct'
import React from 'react'
import styled from 'styled-components'
import spaceChildrenV from '../../../../styles/mixins/spaceChildrenV'
import uiList from '../../../../styles/mixins/uiList'
import TaggedItemListItem from './TaggedItemListItem'

const renderListItems = mapIndexed((item, key) => (
  <li key={key}>
    <TaggedItemListItem item={item} />
  </li>
))

const Layout = styled.ul`
  ${uiList};
  ${spaceChildrenV(['1ru'])};
`

const ArticlesList = ({ items }) => <Layout>{renderListItems(items)}</Layout>

ArticlesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
}

export default ArticlesList
