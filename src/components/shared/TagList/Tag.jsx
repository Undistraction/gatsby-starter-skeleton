import PropTypes from 'prop-types'
import React from 'react'
import { tagPath } from '../../../build/utils/url'
import PillButton from '../PillButton'

const Tag = ({ tag }) => <PillButton to={tagPath(tag)}>{tag}</PillButton>

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
}

export default Tag
