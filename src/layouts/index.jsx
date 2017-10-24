import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import Site from '../components/Site/Site';
import '../styles/global.css';

require('prismjs/themes/prism-twilight.css');

// eslint-disable-next-line no-unused-vars
const LayoutTemplate = ({ children, data, location }) => (
  <Site data={data}>{children}</Site>
);

LayoutTemplate.propTypes = {
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        owner
        title
        startYear
      }
    }
  }
`;

export default LayoutTemplate;
