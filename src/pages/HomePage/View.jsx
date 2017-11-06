import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Page from '../../components/Page';
import HTMLText from '../../components/shared/HTMLText';
import Metadata from '../../components/Metadata';
import mainTextFrom from '../../data/mainTextFrom';
import mainImageSizesFrom from '../../data/mainImageSizesFrom';
import loadMetadata from '../../utils/loadMetadata';

const View = ({ data }) => (
  <Page title="Home">
    <Metadata metadata={loadMetadata('home')} />
    <Img sizes={mainImageSizesFrom(data)} />
    <HTMLText htmlText={mainTextFrom(data)} />
  </Page>
);

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

View.displayName = 'HomePageView';

export default View;
