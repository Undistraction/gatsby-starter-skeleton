import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import renderListItems from '../../helpers/renderListItems'
import api from '../../styles/api'
import HList from '../HList'
import Tag from './Tag'

const Layout = styled(HList)`
  > * {
    ${api({
      // Parent shoudln't usually manipulate padding of child, but here it is
      // used for layout so it's OK.
      paddingRight: `0.25ru`,
      paddingBottom: `0.25ru`,
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
