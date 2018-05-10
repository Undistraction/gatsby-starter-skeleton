import PropTypes from 'prop-types'
import React from 'react'
import { tagPath } from '../../../build/utils/url'
import PillButtonLink from '../links/PillButtonLink'

const Tag = ({ tag }) => (
  <PillButtonLink to={tagPath(tag)}>{tag}</PillButtonLink>
)

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
}

export default Tag
