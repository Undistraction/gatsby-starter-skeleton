import graphql from 'graphql';
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import '../styles/global.css';
// eslint-disable-next-line import/first
import 'prismjs/themes/prism-twilight.css';
import Site from '../components/Site';
import theme from '../styles/themes/default';

console.log('theme', theme);

const View = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Site data={data}>{children}</Site>
  </ThemeProvider>
);

View.propTypes = {
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

View.displayName = 'MainLayoutView';

export const query = graphql`
  query MainLayoutQuery {
    site {
      siteMetadata {
        owner
        title
        startYear
      }
    }
  }
`;

export default View;
