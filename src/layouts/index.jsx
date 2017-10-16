import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import Site from '../components/Site/Site';
import '../styles/global.css';

const TemplateWrapper = ({ children, data }) => (
  <Site data={data}>{children}</Site>
);

TemplateWrapper.propTypes = {
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

export default TemplateWrapper;
