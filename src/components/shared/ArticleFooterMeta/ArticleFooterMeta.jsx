import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { fieldsTags, frontmatterCategory } from '../../helpers/markdown'
import defaultBorder from '../../styles/mixins/defaultBorder'
import TagList from '../TagList'
import VLayout from '../layouts/VLayout'
import TextLink from '../links/TextLink'

const Layout = styled(VLayout)`
  ${defaultBorder(`top`)};
  ${api({
    paddingV: scope`0.5ru`,
  })};
`

const ArticleFooterMeta = ({ article }) => (
  <Layout spacing="tiny">
    <p>
      Filed Under:{` `}
      <TextLink>{frontmatterCategory(article)}</TextLink>
      <TagList tags={fieldsTags(article)} />
    </p>
  </Layout>
)

ArticleFooterMeta.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticleFooterMeta
