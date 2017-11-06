import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';

const PageHeader = ({ title }) => (
  <header>
    <PageTitle title={title} />
  </header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
