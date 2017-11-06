import React from 'react';
import PropTypes from 'prop-types';
import View from './View';

const Container = ({ children }) => <View>{children}</View>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.displayName = 'SiteBodyContainer';

export default Container;
