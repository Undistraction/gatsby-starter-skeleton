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
import TitleSecondary from '../../shared/titles/TitleSecondary'
import scaleBounce from '../../styles/animations/scaleBounce'
import linkProps from '../../styles/mixins/linkProps'

const Title = styled(TitleSecondary)`
  ${api({
    padding: `0.3ru 1ru 0`,
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
    <Title>{fieldsTitle(project)}</Title>
  </Layout>
)

ProjectsListItem.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectsListItem
