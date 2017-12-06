import React from 'react';
import PropTypes from 'prop-types';
import { toString } from 'ramda';
import Layout from './Layout';
import config from '../../../config';

console.log('CONFIG', config);

const credit = () => {
  if (config.meta.showCredit) {
    return (
      <p>
        Built by <a href="http://undistraction.com">Undistraction</a>
      </p>
    );
  }
  return '';
};

const View = ({ metadata }) => {
  const currentYear = toString(new Date().getFullYear());
  const { owner, startYear } = metadata;
  const dateRange =
    currentYear === startYear ? currentYear : `${startYear}–${currentYear}`;

  return (
    <Layout>
      <p>
        Site and contents &copy; {owner} {dateRange}.
      </p>
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
