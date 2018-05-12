import PropTypes from 'prop-types'
import React from 'react'
import { tagPath } from '../../../build/utils/url'
import ContentLink from '../links/ContentLink'

const Tag = ({ tag }) => <ContentLink to={tagPath(tag)}>{tag}</ContentLink>

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
}

export default Tag
