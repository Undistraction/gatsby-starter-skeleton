import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import Layout, { LayoutPrevious, LayoutNext } from './Layout';

const previousPathLink = previousPath => {
  if (previousPath) {
    return (
      <span>
        <GatsbyLink to={previousPath}>Previous Page</GatsbyLink>
      </span>
    );
  }
  return '';
};

const nextPathLink = nextPath => {
  if (nextPath) {
    return (
      <span>
        <GatsbyLink to={nextPath}> Next Page</GatsbyLink>
      </span>
    );
  }
  return '';
};

const ArticlesNav = ({ previousPath, nextPath }) => (
  <Layout>
    <LayoutPrevious>{previousPathLink(previousPath)}</LayoutPrevious>
    <LayoutNext>{nextPathLink(nextPath)}</LayoutNext>
  </Layout>
);

ArticlesNav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  previousPath: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  nextPath: PropTypes.string,
};

ArticlesNav.defaultProps = {
  previousPath: null,
  nextPath: null,
};

export default ArticlesNav;
