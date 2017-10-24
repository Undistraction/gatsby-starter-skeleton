import React from 'react';
import Page from '../components/Page/Page';
import Home from '../components/Home/Home';
import Metadata from '../components/Metadata/Metadata';
import loadMetadata from '../utils/loadMetadata';

const IndexPage = () => {
  const metadata = loadMetadata('home');

  return (
    <Page title="Home">
      <Metadata {...metadata} />
      <Home />
    </Page>
  );
};

export default IndexPage;
