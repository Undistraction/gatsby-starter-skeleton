import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import { isNotEmpty } from 'ramda-adjunct'
import React from 'react'
import styled from 'styled-components'
import HList from '../../../../demo/project/src/components/shared/lists/HList'
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

const TagWrapper = styled(HList)`
  > *:first-child {
    flex: 0 0 auto;
  }
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
        <TagWrapper spacing="tiny">
          <div>Tagged With:</div>
          {` `}
          <TagList tags={fieldsTags(article)} />
        </TagWrapper>
      )}
    </Layout>
  )
}

ArticleFooterMeta.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticleFooterMeta
