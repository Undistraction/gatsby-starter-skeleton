import PropTypes from 'prop-types'
import React from 'react'
import { tagPath } from '../../../utils/paths'
import PillButton from '../PillButton'

const Tag = ({ tag }) => <PillButton to={tagPath(tag)}>{tag}</PillButton>

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
}

export default Tag
