import PropTypes from 'prop-types'
import { mapIndexed } from 'ramda-adjunct'
import React from 'react'
import styled from 'styled-components'
import flexHorizontal from '../../../styles/mixins/flexHorizontal'
import uiList from '../../../styles/mixins/uiList'
import Tag from './Tag'
import api from '../../../styles/api'

const Layout = styled.ul`
  ${flexHorizontal};
  ${uiList};
  flex-wrap: wrap;
  ${api({
    margin: '-0.25ru',
  })};
  > * {
    ${api({
      padding: '0.25ru',
    })};
  }
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
  tags: PropTypes.array,
}

TagList.defaultProps = {
  tags: [],
}

export default TagList
