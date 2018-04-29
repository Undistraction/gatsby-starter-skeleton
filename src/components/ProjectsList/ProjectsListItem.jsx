// -----------------------------------------------------------------------------
// Articles List > View > ArticlesListItem
// -----------------------------------------------------------------------------

import Img from 'gatsby-image'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../../styles/api'
import curvedInset from '../../styles/mixins/curvedInset'
import linkProps from '../../styles/mixins/linkProps'
import transformCenterH from '../../styles/mixins/transformCenterH'

const Title = styled.div`
  ${curvedInset('top')};
  ${api({
    padding: '0.2ru 1ru',
  })};
`
const View = styled(Link)`
  position: relative;
  display: block;
  ${linkProps('c:black', 'c:highlight')};

  ${Title} {
    ${transformCenterH};
    z-index: 2;
    position: absolute;
    text-align: center;
    bottom: 0;
  }
`

const ProjectsListItem = ({ project }) => {
  const { frontmatter, fields } = project
  return (
    <View to={fields.slug}>
      <Img sizes={frontmatter.image.childImageSharp.sizes} />
      <Title>{frontmatter.title}</Title>
    </View>
  )
}

ProjectsListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object.isRequired,
}

export default ProjectsListItem
