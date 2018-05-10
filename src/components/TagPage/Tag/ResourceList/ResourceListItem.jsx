import Img from 'gatsby-image'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { firstToUpper } from '../../../helpers/formatting'
import {
  fieldsSlug,
  fieldsTitle,
  fieldsType,
  frontmatterImageSizes,
} from '../../../helpers/markdown'
import TextLink from '../../../shared/links/TextLink'
import TitleSecondary from '../../../shared/titles/TitleSecondary'
import flexHorizontal from '../../../styles/mixins/flexHorizontal'
import flexVertical from '../../../styles/mixins/flexVertical'
import spaceChildrenH from '../../../styles/mixins/spaceChildrenH'
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV'

const ResourceType = styled.h3`
  font-style: italic;
`

const Media = styled.div`
  position: relative;
`

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

const ResourceListItem = ({ resource }) => {
  const slug = fieldsSlug(resource)
  const title = fieldsTitle(resource)
  return (
    <Layout>
      <Media>
        <Link to={slug} title={title}>
          <Img sizes={frontmatterImageSizes(resource)} />
        </Link>
      </Media>
      <Info>
        <Header>
          <TextLink to={slug} title={title} underlineType="left">
            <TitleSecondary>{title}</TitleSecondary>
          </TextLink>
          <ResourceType>{firstToUpper(fieldsType(resource))}</ResourceType>
        </Header>
        <Body>
          <p>{resource.excerpt}</p>
        </Body>
      </Info>
    </Layout>
  )
}

ResourceListItem.propTypes = {
  resource: PropTypes.object.isRequired,
}

export default ResourceListItem
