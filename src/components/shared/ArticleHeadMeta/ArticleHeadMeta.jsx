import PropTypes from 'prop-types'
import React from 'react'
import {
  frontmatterAuthor,
  frontmatterDate,
  timeToRead,
  wordCount,
} from '../../helpers/markdown'
import VLayout from '../layouts/VLayout'

const ArticleHeadMeta = ({ article }) => (
  <VLayout spacing="none">
    <p>
      <b>{frontmatterDate(article)}</b> by{` `}
      <b>{frontmatterAuthor(article)}</b>
    </p>
    <p>
      <b>
        {wordCount(article)} Words / {timeToRead(article)} Minute Read
      </b>
    </p>
  </VLayout>
)

ArticleHeadMeta.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticleHeadMeta
