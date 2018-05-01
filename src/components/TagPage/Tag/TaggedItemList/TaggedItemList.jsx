import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV'
import uiList from '../../../styles/mixins/uiList'
import TaggedItemListItem from './TaggedItemListItem'
import renderListItems from '../../../helpers/renderListItems'

const Layout = styled.ul`
  ${uiList};
  ${spaceChildrenV(['1ru'])};
`

const TaggedItemList = ({ items }) => (
  <Layout>{renderListItems(TaggedItemListItem, 'item', items)}</Layout>
)

TaggedItemList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
}

export default TaggedItemList
