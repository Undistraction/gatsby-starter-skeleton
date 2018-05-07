import { api } from 'cssapi'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  fieldsSlug,
  fieldsTitle,
  frontmatterImageSizes,
} from '../../helpers/markdown'
import scaleBounce from '../../styles/animations/scaleBounce'
import curvedInset from '../../styles/mixins/curvedInset'
import flexVertical from '../../styles/mixins/flexVertical'
import linkProps from '../../styles/mixins/linkProps'

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
    borderBottom: `2px solid c:backgroundEnd`,
  })};
`

const ImgLayout = styled.div``

const Layout = styled(Link)`
  position: relative;
  display: block;
  ${linkProps(`c:text`, `c:highlight`)};

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
      <Title>{fieldsTitle(project)}</Title>
    </TitleWrapper>
  </Layout>
)

ProjectsListItem.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectsListItem
