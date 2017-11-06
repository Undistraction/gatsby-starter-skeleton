import React from 'react';
import PropTypes from 'prop-types';

const HTMLText = ({ htmlText }) => (
  <div dangerouslySetInnerHTML={{ __html: htmlText }} />
);

HTMLText.propTypes = {
  htmlText: PropTypes.string.isRequired,
};

export default HTMLText;
