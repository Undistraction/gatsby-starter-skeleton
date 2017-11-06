import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const ArticleListItem = ({ article }) => {
  const { frontmatter, fields } = article;
  return (
    <div styleName="base">
      <date>{frontmatter.date}</date>{' '}
      <Link to={fields.slug}>{frontmatter.title}</Link>
      <p>{article.excerpt}</p>
    </div>
  );
};

ArticleListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
