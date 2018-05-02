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

const ArticlesListItem = ({ article }) => {
  const { frontmatter, fields } = article
  return (
    <Layout>
      <Media>
        <Link to={fields.slug}>
          <Img sizes={frontmatter.image.childImageSharp.sizes} />
        </Link>
      </Media>
      <Info>
        <Header>
          <TextLink to={fields.slug}>{frontmatter.title}</TextLink>
          <Date>{frontmatter.date}</Date>
        </Header>
        <Body>
          <p>{article.excerpt}</p>
        </Body>
      </Info>
    </Layout>
  )
}

ArticlesListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
}

export default ArticlesListItem
