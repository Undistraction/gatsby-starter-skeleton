import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { fieldsTags, frontmatterCategory } from '../../helpers/markdown'
import defaultBorder from '../../styles/mixins/defaultBorder'
import TagList from '../TagList'
import VLayout from '../layouts/VLayout'
import ContentLink from '../links/ContentLink'

const Layout = styled(VLayout)`
  ${defaultBorder(`top`)};
  ${api({
    paddingV: scope`0.5ru`,
  })};
`

const ArticleFooterMeta = ({ article }) => (
  <Layout spacing="none">
    <div>
      Filed Under:{` `}
      <ContentLink>{frontmatterCategory(article)}</ContentLink>
    </div>
    <div>
      Tagged With: <TagList tags={fieldsTags(article)} />
    </div>
  </Layout>
)

ArticleFooterMeta.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticleFooterMeta
