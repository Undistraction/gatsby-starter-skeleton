// eslint-disable react/no-danger

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  fieldsSlug,
  fieldsTags,
  fieldsTitle,
  markdownItem,
  next,
  previous,
} from '../../helpers/markdown'
import HTMLText from '../../shared/HTMLText'
import NextPreviousNav from '../../shared/NextPreviousNav'
import TagList from '../../shared/TagList'

const Header = styled.header``
const Body = styled.div``
const Footer = styled.footer``

const Project = ({ data }) => {
  const project = markdownItem(data)
  const previousProject = previous(data)
  const nextProject = next(data)

  return (
    <React.Fragment>
      <Header>
        <NextPreviousNav
          previousLabel={fieldsTitle(previousProject)}
          nextLabel={fieldsTitle(nextProject)}
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
    </React.Fragment>
  )
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Project
