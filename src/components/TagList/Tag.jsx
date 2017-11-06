import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Tag = ({ tag }) => <Link to={`/tags/${tag}`}>{tag}</Link>;

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
