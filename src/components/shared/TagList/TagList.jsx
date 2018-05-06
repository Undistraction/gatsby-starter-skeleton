import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import renderListItems from '../../helpers/renderListItems'
import api from '../../styles/api'
import HList from '../HList'
import Tag from './Tag'

const Layout = styled(HList)`
  ${api({
    margin: `-0.25ru`,
  })};

  > * {
    ${api({
      // Parent shoudln't usually manipulate padding of child, but here it is
      // used for layout so it's OK.
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
