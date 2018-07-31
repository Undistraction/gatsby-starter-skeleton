import Img from 'gatsby-image'
import { Link } from 'gatsby'
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
import HLayout from '../../../shared/layouts/HLayout'
import VLayout from '../../../shared/layouts/VLayout'
import TextLink from '../../../shared/links/TextLink'
import TitleSecondary from '../../../shared/titles/TitleSecondary'

const ResourceType = styled.h3`
  font-style: italic;
`

const Media = styled.div`
  position: relative;
`

const Layout = styled(HLayout)`
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
          <Img fluid={frontmatterImageSizes(resource)} />
        </Link>
      </Media>
      <VLayout spacing="small">
        <TextLink to={slug} title={title} underlineType="left">
          <TitleSecondary>{title}</TitleSecondary>
        </TextLink>
        <ResourceType>{firstToUpper(fieldsType(resource))}</ResourceType>
        <p>{resource.excerpt}</p>
      </VLayout>
    </Layout>
  )
}

ResourceListItem.propTypes = {
  resource: PropTypes.object.isRequired,
}

export default ResourceListItem
