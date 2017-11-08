import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import Layout, { LayoutPrevious, LayoutNext } from './Layout';

const previousArticleMarkup = previousArticle => {
  if (previousArticle) {
    return (
      <span>
        Previous Article:{' '}
        <GatsbyLink to={previousArticle.fields.slug}>
          {previousArticle.frontmatter.title}
        </GatsbyLink>
      </span>
    );
  }
  return '';
};

const nextArticleMarkup = nextArticle => {
  if (nextArticle) {
    return (
      <span>
        Next Page:{' '}
        <GatsbyLink to={nextArticle.fields.slug}>
          {nextArticle.frontmatter.title}
        </GatsbyLink>
      </span>
    );
  }
  return '';
};

const ArticleNav = ({ previousArticle, nextArticle }) => (
  <Layout>
    <LayoutPrevious>{previousArticleMarkup(previousArticle)}</LayoutPrevious>
    <LayoutNext>{nextArticleMarkup(nextArticle)}</LayoutNext>
  </Layout>
);

ArticleNav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  previousArticle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  nextArticle: PropTypes.object,
};

ArticleNav.defaultProps = {
  previousArticle: null,
  nextArticle: null,
};

export default ArticleNav;
