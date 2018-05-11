import { api, scope } from 'cssapi'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  fieldsSlug,
  fieldsTitle,
  frontmatterDate,
  frontmatterImageSizes,
} from '../../../helpers/markdown'
import HLayout from '../../../shared/layouts/HLayout'
import VLayout from '../../../shared/layouts/VLayout'
import TextLink from '../../../shared/links/TextLink'
import TitleSecondary from '../../../shared/titles/TitleSecondary'

const Media = styled.div``

const Layout = styled(HLayout)`
  ${Media} {
    flex: 0 0 25%;
  }
`

const Date = styled.time`
  display: block;
  ${api({
    baseline: scope`s:smallprint`,
  })};
`

const ArticlesListItem = ({ article }) => {
  const title = fieldsTitle(article)
  return (
    <Layout>
      <Media>
        <Link to={fieldsSlug(article)} title={title}>
          <Img sizes={frontmatterImageSizes(article)} />
        </Link>
      </Media>
      <VLayout size="small">
        <TextLink to={fieldsSlug(article)} title={title} underlineType="left">
          <TitleSecondary>{title}</TitleSecondary>
        </TextLink>
        <Date>{frontmatterDate(article)}</Date>
        <p>{article.excerpt}</p>
      </VLayout>
    </Layout>
  )
}

ArticlesListItem.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticlesListItem
