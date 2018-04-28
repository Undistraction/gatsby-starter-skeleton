import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import flexHorizontal from '../../styles/mixins/flexHorizontal';

export const LayoutPrevious = styled.div``;
export const LayoutNext = styled.div``;

const Layout = styled.nav`
  ${flexHorizontal};

  ${LayoutNext} {
    margin-left: auto;
  }

  ${LayoutPrevious} {
    margin-right: auto;
  }

  ${LayoutNext}, ${LayoutPrevious} {
    flex: 0 0 auto;
  }
`;

const previousArticleMarkup = previousArticle =>
  previousArticle ? (
    <span>
      Previous Article:{' '}
      <GatsbyLink to={previousArticle.fields.slug}>
        {previousArticle.frontmatter.title}
      </GatsbyLink>
    </span>
  ) : (
    ''
  );

const nextArticleMarkup = nextArticle =>
  nextArticle ? (
    <span>
      Next Page:{' '}
      <GatsbyLink to={nextArticle.fields.slug}>
        {nextArticle.frontmatter.title}
      </GatsbyLink>
    </span>
  ) : (
    ''
  );

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
