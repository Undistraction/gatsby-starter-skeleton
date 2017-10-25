import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import CSSModules from 'react-css-modules';
import styles from './ArticleNav.module.css';

const previousArticleMarkup = previousArticle => {
  if (previousArticle) {
    return (
      <span className={styles.previousLink}>
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
      <span className={styles.nextLink}>
        Next Page:{' '}
        <GatsbyLink to={nextArticle.fields.slug}>
          {nextArticle.frontmatter.title}
        </GatsbyLink>
      </span>
    );
  }
  return '';
};

const ArticleNav = ({ previousArticle, nextArticle }) => {
  return (
    <nav styleName="base">
      {previousArticleMarkup(previousArticle)}
      {nextArticleMarkup(nextArticle)}
    </nav>
  );
};

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

export default CSSModules(ArticleNav, styles);
