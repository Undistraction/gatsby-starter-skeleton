import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import CSSModules from 'react-css-modules';
import styles from './ArticleListItem.module.css';

const ArticleListItem = ({ article }) => {
  const { frontmatter, fields } = article;
  return (
    <li styleName="base">
      <date>{frontmatter.date}</date>{' '}
      <Link to={fields.slug}>{frontmatter.title}</Link>
      <p>{article.excerpt}</p>
    </li>
  );
};

ArticleListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
};
export default CSSModules(ArticleListItem, styles);
