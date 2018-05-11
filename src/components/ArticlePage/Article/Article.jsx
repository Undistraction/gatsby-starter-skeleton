import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  fieldsTags,
  frontmatterAuthor,
  frontmatterDate,
} from '../../helpers/markdown'
import HTMLText from '../../shared/HTMLText'
import ResourceFooter from '../../shared/ResourceFooter'
import TagList from '../../shared/TagList'
import HLayout from '../../shared/layouts/HLayout'
import VLayout from '../../shared/layouts/VLayout'
import TitleSecondary from '../../shared/titles/TitleSecondary'

const Meta = styled(VLayout)``

const Author = styled(HLayout)``

const Article = ({ article }) => (
  <React.Fragment>
    <Meta size="tiny">
      <Author>
        Date: <TitleSecondary>{frontmatterDate(article)}</TitleSecondary>
      </Author>
      <Author>
        Author: <TitleSecondary>{frontmatterAuthor(article)}</TitleSecondary>
      </Author>
      <Author>
        Filed Under: <TitleSecondary>Programming</TitleSecondary>
      </Author>
    </Meta>
    <HTMLText htmlAst={article.htmlAst} />
    <ResourceFooter>
      <TagList tags={fieldsTags(article)} />
    </ResourceFooter>
  </React.Fragment>
)

Article.propTypes = {
  article: PropTypes.object.isRequired,
}

export default Article
