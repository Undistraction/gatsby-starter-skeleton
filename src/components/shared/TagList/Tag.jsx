import PropTypes from 'prop-types'
import React from 'react'
import { tagPath } from '../../../build/utils/url'
import TextLink from '../links/TextLink'

const Tag = ({ tag }) => <TextLink to={tagPath(tag)}>{tag}</TextLink>

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
}

export default Tag
