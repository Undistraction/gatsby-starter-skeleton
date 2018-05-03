// eslint-disable react/no-danger

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import TagList from '../../shared/TagList'
import HTMLText from '../../shared/HTMLText'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'
import {
  frontmatterTitle,
  fieldsSlug,
  previous,
  next,
  markdownItem,
  fieldsTags,
} from '../../helpers/markdown'
import NextPreviousNav from '../../shared/NextPreviousNav'

const Header = styled.header``
const Body = styled.div``
const Footer = styled.footer``

const Layout = styled.article`
  ${flexVertical};
  ${spaceChildrenV(`1ru`)};
`
const Project = ({ data }) => {
  const project = markdownItem(data)
  const previousProject = previous(data)
  const nextProject = next(data)

  return (
    <Layout>
      <Header>
        <NextPreviousNav
          previousLabel={frontmatterTitle(previousProject)}
          nextLabel={frontmatterTitle(nextProject)}
          previousPath={fieldsSlug(previousProject)}
          nextPath={fieldsSlug(nextProject)}
        />
      </Header>
      <Body>
        <HTMLText htmlText={project.html} />
      </Body>
      <Footer>
        <TagList tags={fieldsTags(project)} />
      </Footer>
    </Layout>
  )
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Project
