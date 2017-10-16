import React from 'react';
import Page from '../components/Page/Page';
import Fonts from '../components/Fonts/Fonts';
import Metadata from '../components/Metadata/Metadata';
import loadMetadata from '../utils/loadMetadata';

const FontsPage = () => {
  const metadata = loadMetadata('fonts');
  return (
    <Page title="Fonts">
      <Metadata {...metadata} />
      <Fonts />
    </Page>
  );
};

export default FontsPage;
