// -----------------------------------------------------------------------------
// Articles List > View > ArticlesListItem
// -----------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const ArticlesListItem = ({ article }) => {
  const { frontmatter, fields } = article;
  return (
    <div>
      <date>{frontmatter.date}</date>{' '}
      <Link to={fields.slug}>{frontmatter.title}</Link>
      <p>{article.excerpt}</p>
    </div>
  );
};

ArticlesListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
};

export default ArticlesListItem;
