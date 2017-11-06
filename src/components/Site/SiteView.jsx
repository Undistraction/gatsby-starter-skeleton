import React from 'react';
import PropTypes from 'prop-types';

import ViewWrapper from './ViewWrapper';
import BoxChild from '../shared/BoxChild';
import SiteHeader from './SiteHeader';
import SiteBody from './SiteBody';
import SiteFooter from './SiteFooter';

const SiteView = ({ children, data }) => {
  const { siteMetadata: metadata } = data.site;
  return (
    <ViewWrapper>
      <BoxChild>
        <SiteHeader title={metadata.title} />
      </BoxChild>
      <BoxChild grow="1">
        <SiteBody>{children()}</SiteBody>
      </BoxChild>
      <BoxChild>
        <SiteFooter metadata={metadata} />
      </BoxChild>
    </ViewWrapper>
  );
};

SiteView.propTypes = {
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default SiteView;
