import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  fieldsSlug,
  fieldsTitle,
  frontmatterImageSizes,
} from '../../helpers/markdown'
import VLayout from '../../shared/layouts/VLayout'
import BaseLink from '../../shared/links/BaseLink'
import TitleSecondary from '../../shared/titles/TitleSecondary'
import scaleBounce from '../../styles/animations/scaleBounce'
import linkProps from '../../styles/mixins/linkProps'

const Title = styled(TitleSecondary)`
  text-align: center;
  position: relative;
  font-weight: bold;
`

const ImgLayout = styled.div``

const Layout = styled(BaseLink)`
  position: relative;
  display: block;
  ${linkProps(`c:text`, `c:highlight`)};

  html.feat-no-touchevents &:hover {
    animation: ${scaleBounce(1.05, 0.97)} 0.3s ease-in-out;
  }
`
const ProjectsListItem = ({ project }) => (
  <Layout to={fieldsSlug(project)}>
    <VLayout spacing="small">
      <ImgLayout>
        <Img fluid={frontmatterImageSizes(project)} />
      </ImgLayout>
      <Title>{fieldsTitle(project)}</Title>
    </VLayout>
  </Layout>
)

ProjectsListItem.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectsListItem
