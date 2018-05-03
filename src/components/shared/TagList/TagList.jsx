import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import uiList from '../../styles/mixins/uiList'
import Tag from './Tag'
import api from '../../styles/api'
import renderListItems from '../../helpers/renderListItems'

const Layout = styled.ul`
  ${flexHorizontal};
  ${uiList};
  flex-wrap: wrap;

  ${api({
    margin: `-0.25ru`,
  })};

  > * {
    ${api({
      padding: `0.125ru`,
    })};
  }
`

const TagList = ({ tags }) => {
  const tagsElements = renderListItems(Tag, `tag`, tags)
  return <Layout>{tagsElements}</Layout>
}

TagList.propTypes = {
  tags: PropTypes.array,
}

TagList.defaultProps = {
  tags: [],
}

export default TagList
