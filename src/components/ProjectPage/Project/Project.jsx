// eslint-disable react/no-danger

import PropTypes from 'prop-types'
import { findIndex, pathEq } from 'ramda'
import React from 'react'
import styled from 'styled-components'
import TagList from '../../shared/TagList'
import HTMLText from '../../shared/HTMLText'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import { frontmatterTitle, fieldsSlug } from '../../helpers/markdown'
import NextPreviousNav from '../../shared/NextPreviousNav'

const nodeIdPath = pathEq([`node`, `id`])

const previousProject = (project, projects) => {
  const currentId = project.id
  const currentIndex = findIndex(nodeIdPath(currentId))(projects)
  return currentIndex > 0 ? projects[currentIndex - 1].node : null
}

const nextProject = (project, projects) => {
  const currentId = project.id
  const currentIndex = findIndex(nodeIdPath(currentId))(projects)
  return currentIndex < projects.length - 1
    ? projects[currentIndex + 1].node
    : null
}

const Header = styled.header``
const Body = styled.div``
const Footer = styled.footer``

const Layout = styled.article`
  ${flexVertical};
  ${spaceChildrenV(`1ru`)};
`
const Project = ({ data }) => {
  const project = data.markdownRemark
  const projects = data.allMarkdownRemark.edges
  const { tags } = project.fields
  const next = nextProject(project, projects)
  const previous = previousProject(project, projects)

  return (
    <Layout>
      <Header>
        <NextPreviousNav
          previousLabel={frontmatterTitle(previous)}
          nextLabel={frontmatterTitle(next)}
          previousPath={fieldsSlug(previous)}
          nextPath={fieldsSlug(next)}
        />
      </Header>
      <Body>
        <HTMLText htmlText={project.html} />
      </Body>
      <Footer>
        <TagList tags={tags} />
      </Footer>
    </Layout>
  )
}

Project.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default Project
