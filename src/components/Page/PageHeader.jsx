import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';

const PageHeader = ({ title }) => (
  <header>
    <PageTitle>{title}</PageTitle>
  </header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
