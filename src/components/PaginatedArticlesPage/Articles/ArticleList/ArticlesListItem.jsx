import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'
import flexVertical from '../../../styles/mixins/flexVertical'
import flexHorizontal from '../../../styles/mixins/flexHorizontal'
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV'
import spaceChildrenH from '../../../styles/mixins/spaceChildrenH'
import TextLink from '../../../shared/TextLink'
import api from '../../../styles/api'
import {
  fieldsSlug,
  frontmatterImageSizes,
  frontmatterTitle,
  frontmatterDate,
} from '../../../helpers/markdown'

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
        <TextLink to={fieldsSlug(article)}>
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
