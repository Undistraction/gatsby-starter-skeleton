import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import { pluck } from 'ramda';
import Page from '../components/Page/Page';
import Articles from '../components/Articles/Articles';
import Metadata from '../components/Metadata/Metadata';
import loadMetadata from '../utils/loadMetadata';

const ArticlesPage = ({ data }) => {
  console.log('Articles Page');
  const metadata = loadMetadata('articles');
  const articles = pluck('node')(data.allMarkdownRemark.edges);
  const { totalCount: itemCount } = data.allMarkdownRemark;
  return (
    <Page title="Articles">
      <Metadata {...metadata} />
      <Articles articles={articles} itemCount={itemCount} />
    </Page>
  );
};

export default ArticlesPage;

ArticlesPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/src/content/articles/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
