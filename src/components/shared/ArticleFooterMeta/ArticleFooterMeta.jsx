import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
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

const ArticleFooterMeta = ({ article }) => {
  const category = frontmatterCategory(article)
  return (
    <Layout spacing="none">
      <div>
        Filed Under:{` `}
        <TextLink to={categoryPath(category)}>{category}</TextLink>
      </div>
      <div>
        Tagged With: <TagList tags={fieldsTags(article)} />
      </div>
    </Layout>
  )
}

ArticleFooterMeta.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticleFooterMeta
