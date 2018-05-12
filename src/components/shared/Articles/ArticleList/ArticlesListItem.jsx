import Img from 'gatsby-image'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  fieldsSlug,
  fieldsTitle,
  frontmatterImageSizes,
} from '../../../helpers/markdown'
import HLayout from '../../../shared/layouts/HLayout'
import VLayout from '../../../shared/layouts/VLayout'
import TextLink from '../../../shared/links/TextLink'
import TitleSecondary from '../../../shared/titles/TitleSecondary'
import ArticleFooterMeta from '../../ArticleFooterMeta'
import ArticleHeadMeta from '../../ArticleHeadMeta'

const Layout = styled(HLayout)`
  > * :first-child {
    flex: 0 0 25%;
  }
`

const ArticlesListItem = ({ article }) => {
  const title = fieldsTitle(article)
  return (
    <Layout>
      <Link to={fieldsSlug(article)} title={title}>
        <Img sizes={frontmatterImageSizes(article)} />
      </Link>
      <VLayout spacing="small">
        <TextLink to={fieldsSlug(article)} title={title} underlineType="left">
          <TitleSecondary>{title}</TitleSecondary>
        </TextLink>
        <ArticleHeadMeta article={article} />
        <p>{article.excerpt}</p>
        <ArticleFooterMeta article={article} />
      </VLayout>
    </Layout>
  )
}

ArticlesListItem.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticlesListItem
