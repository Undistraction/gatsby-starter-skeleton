import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import Page from '../components/Page/Page';
import Home from '../components/Home/Home';
import Metadata from '../components/Metadata/Metadata';
import loadMetadata from '../utils/loadMetadata';

const mainTextFrom = data => data.mainText.childMarkdownRemark.html;
const mainImageSizes = data => data.mainImageSizes.childImageSharp.sizes;

const IndexPage = ({ data }) => {
  console.log('Home Page');
  const metadata = loadMetadata('home');
  return (
    <Page title="Home">
      <Metadata {...metadata} />
      <Home
        mainImageSizes={mainImageSizes(data)}
        mainText={mainTextFrom(data)}
      />
    </Page>
  );
};

IndexPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query FrontPageQuery {
    mainImageSizes: file(relativePath: { eq: "home/images/main.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    mainText: file(relativePath: { eq: "home/main.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
