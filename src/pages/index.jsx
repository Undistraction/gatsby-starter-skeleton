import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import { pluck } from 'ramda';
import Page from '../components/Page/Page';
import Home from '../components/Home/Home';
import Metadata from '../components/Metadata/Metadata';
import loadMetadata from '../utils/loadMetadata';

const IndexPage = ({ data }) => {
  const metadata = loadMetadata('home');
  const articles = pluck('node')(data.allMarkdownRemark.edges);
  const { totalCount: itemCount } = data.allMarkdownRemark;
  return (
    <Page title="Home">
      <Metadata {...metadata} />
      <Home articles={articles} itemCount={itemCount} />
    </Page>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
