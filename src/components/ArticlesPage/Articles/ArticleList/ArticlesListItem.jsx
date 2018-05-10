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
import TextLink from '../../../shared/links/TextLink'
import TitleSecondary from '../../../shared/titles/TitleSecondary'
import flexHorizontal from '../../../styles/mixins/flexHorizontal'
import flexVertical from '../../../styles/mixins/flexVertical'
import spaceChildrenH from '../../../styles/mixins/spaceChildrenH'
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV'

const Media = styled.div``
const Info = styled.div`
  ${flexVertical};
  ${spaceChildrenV(`0.5ru`)};
`
const Header = styled.header``

const Body = styled.div``
const Layout = styled.div`
  ${flexHorizontal};
  ${spaceChildrenH(`1ru`)};

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
      <Info>
        <Header>
          <TextLink to={fieldsSlug(article)} title={title} underlineType="left">
            <TitleSecondary>{title}</TitleSecondary>
          </TextLink>
          <Date>{frontmatterDate(article)}</Date>
        </Header>
        <Body>
          <p>{article.excerpt}</p>
        </Body>
      </Info>
    </Layout>
  )
}

ArticlesListItem.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticlesListItem
