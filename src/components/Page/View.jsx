import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from './PageHeader';
import VBox from '../shared/VBox';
import BoxChild from '../shared/BoxChild';

const Page = ({ title, children }) => (
  <VBox>
    <BoxChild>
      <PageHeader title={title} />
    </BoxChild>
    <BoxChild grow={1}>
      <div>{children}</div>
    </BoxChild>
  </VBox>
);

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

Page.defaultProps = {
  children: [],
};

export default Page;
