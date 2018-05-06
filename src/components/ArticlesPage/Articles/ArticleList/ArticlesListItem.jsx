import { api } from 'cssapi'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  fieldsSlug,
  frontmatterDate,
  frontmatterImageSizes,
  frontmatterTitle,
} from '../../../helpers/markdown'
import TextLink from '../../../shared/TextLink'
import flexHorizontal from '../../../styles/mixins/flexHorizontal'
import flexVertical from '../../../styles/mixins/flexVertical'
import spaceChildrenH from '../../../styles/mixins/spaceChildrenH'
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV'

const Media = styled.div``
const Info = styled.div`
  ${flexVertical};
  ${spaceChildrenV(`0.5ru`)};
`
const Header = styled.header`
  ${flexVertical};
  ${spaceChildrenV(`0.5ru`)};
`

const Body = styled.div``
const Layout = styled.div`
  ${flexHorizontal};
  ${spaceChildrenH(`1ru`)};

  ${Media} {
    width: 25%;
  }
`

const Date = styled.time`
  ${api({
    fontSize: `s:smallprint`,
  })};
`

const ArticlesListItem = ({ article }) => (
  <Layout>
    <Media>
      <Link to={fieldsSlug(article)}>
        <Img sizes={frontmatterImageSizes(article)} />
      </Link>
    </Media>
    <Info>
      <Header>
        <TextLink to={fieldsSlug(article)} underlineType="left">
          {frontmatterTitle(article)}
        </TextLink>
        <Date>{frontmatterDate(article)}</Date>
      </Header>
      <Body>
        <p>{article.excerpt}</p>
      </Body>
    </Info>
  </Layout>
)

ArticlesListItem.propTypes = {
  article: PropTypes.object.isRequired,
}

export default ArticlesListItem
