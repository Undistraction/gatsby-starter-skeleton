import graphql from 'graphql';
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import 'prismjs/themes/prism-twilight.css';
import '../styles/global.css';
import Site from '../components/Site';
import theme from '../styles/themes/default';

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
