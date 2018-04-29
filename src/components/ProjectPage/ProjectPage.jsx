// eslint-disable react/no-danger

import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { findIndex, pathEq } from 'ramda'
import React from 'react'
import ArticleNav from '../../components/ArticleNav'
import Metadata from '../../components/Metadata'
import HTMLText from '../../components/shared/HTMLText'

const nodeIdPath = pathEq(['node', 'id'])

const previousProject = (article, articles) => {
  const currentId = article.id
  const currentIndex = findIndex(nodeIdPath(currentId))(articles)
  return currentIndex > 0 ? articles[currentIndex - 1].node : null
}

const nextProject = (article, articles) => {
  const currentId = article.id
  const currentIndex = findIndex(nodeIdPath(currentId))(articles)
  return currentIndex < articles.length - 1
    ? articles[currentIndex + 1].node
    : null
}

const ProjectPage = ({ data }) => {
  const project = data.markdownRemark
  const projects = data.allMarkdownRemark.edges
  const { metadata } = project.fields
  const { frontmatter } = project
  return (
    <article>
      <Metadata {...metadata} />
      <Img sizes={frontmatter.image.childImageSharp.sizes} />
      <header>{frontmatter.title}</header>
      <ArticleNav
        previousProject={previousProject(project, projects)}
        nextProject={nextProject(project, projects)}
      />
      <HTMLText htmlText={project.html} />
      <div
        style={{
          position: 'relative',
          minWidth: '100%',
          minHeight: '100vh',
          margin: '0 -40px',
        }}
      />
    </article>
  )
}

ProjectPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export default ProjectPage
