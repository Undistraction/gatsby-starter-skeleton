import React from 'react';
import Page from '../components/Page/Page';
import About from '../components/About/About';
import Metadata from '../components/Metadata/Metadata';
import loadMetadata from '../utils/loadMetadata';

const AboutPage = () => {
  const metadata = loadMetadata('about');

  console.dir(metadata);
  return (
    <Page title="About">
      <Metadata {...metadata} />
      <About />
    </Page>
  );
};

export default AboutPage;
