import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const ScriptTag = ({ path }) => (
  <Helmet>
    <script src={path} type="text/javascript" />
  </Helmet>
);

ScriptTag.propTypes = {
  path: PropTypes.string.isRequired,
};

export default ScriptTag;
