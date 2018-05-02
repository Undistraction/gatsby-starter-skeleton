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
import flexVertical from '../../styles/mixins/flexVertical'
import linkProps from '../../styles/mixins/linkProps'
import scaleBounce from '../../styles/animations/scaleBounce'
import {
  fieldsSlug,
  frontmatterTitle,
  frontmatterImageSizes,
} from '../../helpers/markdown'

const TitleWrapper = styled.div`
  ${flexVertical};
  position: absolute;
  align-items: center;
  justify-content: flex-end;
  bottom: -1px;
  ${api({
    offset: 0,
  })};
`

const Title = styled.div`
  position: relative;
  ${curvedInset(`top`)};
  ${api({
    padding: `0.3ru 1ru 0`,
    marginH: `1ru`,
    top: `2px`,
    borderBottom: `2px solid c:white`,
  })};
`

const ImgLayout = styled.div``

const Layout = styled(Link)`
  position: relative;
  display: block;
  ${linkProps(`c:black`, `c:highlight`)};

  &:hover {
    animation: ${scaleBounce(1.05, 0.97)} 0.3s ease-in-out;
  }

  ${Title} {
    text-align: center;
    position: relative;
    font-weight: bold;
  }
`

const ProjectsListItem = ({ project }) => (
  <Layout to={fieldsSlug(project)}>
    <ImgLayout>
      <Img sizes={frontmatterImageSizes(project)} />
    </ImgLayout>
    <TitleWrapper>
      <Title>{frontmatterTitle(project)}</Title>
    </TitleWrapper>
  </Layout>
)

ProjectsListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object.isRequired,
}

export default ProjectsListItem
