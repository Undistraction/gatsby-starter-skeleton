import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { test } from 'ramda'
import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'
import flexVertical from '../../../styles/mixins/flexVertical'
import flexHorizontal from '../../../styles/mixins/flexHorizontal'
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV'
import spaceChildrenH from '../../../styles/mixins/spaceChildrenH'
import TextLink from '../../../shared/TextLink'

const ImgLayout = styled.div``
const InfoLayout = styled.div`
  ${flexVertical};
  ${spaceChildrenV('0.5ru')};
`
const Header = styled.header``

const Body = styled.div``
const Layout = styled.div`
  ${flexHorizontal};
  ${spaceChildrenH('1ru')};

  ${ImgLayout} {
    width: 25%;
  }
`

const ArticlesListItem = ({ item }) => {
  const type = test(/articles\//, item.fields.slug) ? 'Article' : 'Project'
  const { frontmatter, fields } = item
  return (
    <Layout>
      <ImgLayout>
        <Link to={fields.slug}>
          <Img sizes={frontmatter.image.childImageSharp.sizes} />
        </Link>
      </ImgLayout>
      <InfoLayout>
        <Header>
          {type}: <TextLink to={fields.slug}>{frontmatter.title}</TextLink>
        </Header>
        <Body>
          <p>{item.excerpt}</p>
        </Body>
      </InfoLayout>
    </Layout>
  )
}

ArticlesListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
}

export default ArticlesListItem
