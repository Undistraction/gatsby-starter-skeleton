// eslint-disable react/no-danger

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { fieldsTags, markdownItem } from '../../helpers/markdown'
import HTMLText from '../../shared/HTMLText'
import TagList from '../../shared/TagList'

const Header = styled.header``
const Body = styled.div``
const Footer = styled.footer``

const Project = ({ data }) => {
  const project = markdownItem(data)

  return (
    <React.Fragment>
      <Body>
        <HTMLText htmlAst={project.htmlAst} />
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
