import React from 'react';
import PropTypes from 'prop-types';
import HTMLText from '../../components/shared/HTMLText';
import Metadata from '../../components/Metadata';
import Page from '../../components/Page';
import loadMetadata from '../../utils/loadMetadata';
import mainTextFrom from '../../data/mainTextFrom';

const View = ({ data }) => (
  <Page title="About">
    <Metadata metadata={loadMetadata('about')} />
    <HTMLText htmlText={mainTextFrom(data)} />
  </Page>
);

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

View.displayName = 'AboutPageView';

export default View;
