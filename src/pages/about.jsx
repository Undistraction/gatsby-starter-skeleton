import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import Page from '../components/Page/Page';
import About from '../components/About/About';
import Metadata from '../components/Metadata/Metadata';
import loadMetadata from '../utils/loadMetadata';

const mainTextFrom = data => data.mainText.childMarkdownRemark.html;

const AboutPage = ({ data }) => {
  console.log('About Page');
  const metadata = loadMetadata('about');
  return (
    <Page title="About">
      <Metadata {...metadata} />
      <About mainText={mainTextFrom(data)} />
    </Page>
  );
};

AboutPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const query = graphql`
  query AboutPageQuery {
    mainText: file(relativePath: { eq: "content/pages/about/main.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
