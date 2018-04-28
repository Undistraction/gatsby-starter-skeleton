import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toString } from 'ramda';
import config from '../../../config';
import Credit from './Credit';
import Copyright from './Copyright';
import blockCenterH from '../../../styles/mixins/blockCenterH';
import spaceChildrenV from '../../../styles/mixins/spaceChildrenV';
import api from '../../../styles/api';

const credit = () => {
  if (config.meta.showCredit) {
    return <Credit />;
  }
  return '';
};

const Layout = styled.footer`
  text-align: center;
  ${blockCenterH};
  ${spaceChildrenV('1ru')};

  ${api({
    padding: '4ru 0 1ru',
    baseline: 's:smallprint',
  })};

  > * {
    ${api({
      margin: ['0 auto 1ru'],
    })};
  }
`;

const View = ({ metadata }) => {
  const currentYear = toString(new Date().getFullYear());
  const { owner, startYear } = metadata;
  const dateRange =
    currentYear === startYear ? currentYear : `${startYear}–${currentYear}`;

  return (
    <Layout>
      <Copyright owner={owner} dateRange={dateRange} />
      {credit()}
    </Layout>
  );
};

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  metadata: PropTypes.object.isRequired,
};

View.displayName = 'SiteFooter';

export default View;
