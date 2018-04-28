// -----------------------------------------------------------------------------
// About Page > View >
// -----------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import HTMLText from '../../components/shared/HTMLText';
import Metadata from '../../components/Metadata';
import Page from '../../components/Page';
import loadMetadata from '../../utils/loadMetadata';
import mainImageSizesFrom from '../../data/mainImageSizesFrom';
import mainTextFrom from '../../data/mainTextFrom';
import titleFrom from '../../data/titleFrom';

const View = ({ data }) => (
  <Page title={titleFrom(data)}>
    <Metadata metadata={loadMetadata('about')} />
    <Img sizes={mainImageSizesFrom(data)} />
    <HTMLText htmlText={mainTextFrom(data)} />
  </Page>
);

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

View.displayName = 'AboutPageView';

export default View;
