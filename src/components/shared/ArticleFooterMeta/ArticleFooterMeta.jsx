import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import { isNotEmpty } from 'ramda-adjunct'
import React from 'react'
import styled from 'styled-components'
import { categoryPath } from '../../../build/utils/url'
import { fieldsTags, frontmatterCategory } from '../../helpers/markdown'
import defaultBorder from '../../styles/mixins/defaultBorder'
import VLayout from '../layouts/VLayout'
import TextLink from '../links/TextLink'
import TagList from '../TagList'

const Layout = styled(VLayout)`
  ${defaultBorder(`top`)};
  ${api({
    paddingV: scope`0.5ru`,
  })};
`

const TagLabel = styled.div`
  display: inline-block;
`

const ArticleFooterMeta = ({ article }) => {
  const category = frontmatterCategory(article)
  const tags = fieldsTags(article)
  return (
    <Layout spacing="none">
      <div>
        Filed Under:{` `}
        <TextLink to={categoryPath(category)}>{category}</TextLink>
      </div>
      {isNotEmpty(tags) && (
        <div>
          <TagLabel>Tagged With:</TagLabel>
          {` `}
          <TagList tags={fieldsTags(article)} />
        </div>
      )}
    </Layout>
  )
}

ArticleFooterMeta.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticleFooterMeta
