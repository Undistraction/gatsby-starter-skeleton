import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Link from 'gatsby-link';
import styles from './Tag.module.css';

const Tag = ({ tag }) => <Link to={`/tags/${tag}`}>{tag}</Link>;

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default CSSModules(Tag, styles);
