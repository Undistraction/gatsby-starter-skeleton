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
import { resourceType } from '../../../helpers/resources'

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
    width: 25%;
  }
`

const ResourceListItem = ({ resource }) => {
  const { frontmatter, fields } = resource
  return (
    <Layout>
      <Media>
        <Link to={fields.slug}>
          <Img sizes={frontmatter.image.childImageSharp.sizes} />
        </Link>
      </Media>
      <Info>
        <Header>
          {resourceType(resource.fields.slug)}:{` `}
          <TextLink to={fields.slug}>{frontmatter.title}</TextLink>
        </Header>
        <Body>
          <p>{resource.excerpt}</p>
        </Body>
      </Info>
    </Layout>
  )
}

ResourceListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  resource: PropTypes.object.isRequired,
}

export default ResourceListItem
