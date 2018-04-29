import PropTypes from 'prop-types'
import { mapIndexed } from 'ramda-adjunct'
import React from 'react'
import styled from 'styled-components'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import spaceChildrenH from '../../styles/mixins/spaceChildrenH'
import uiList from '../../styles/mixins/uiList'
import Tag from './Tag'

const Layout = styled.ul`
  ${flexHorizontal};
  ${uiList};
  ${spaceChildrenH('0.5ru')};
`

const buildTags = mapIndexed((tag, key) => (
  <li key={key}>
    <Tag tag={tag} />
  </li>
))

const TagList = ({ tags }) => {
  const tagsElements = buildTags(tags)
  return <Layout>{tagsElements}</Layout>
}

TagList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array.isRequired,
}

export default TagList
