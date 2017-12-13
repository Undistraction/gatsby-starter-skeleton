import React from 'react';
import PropTypes from 'prop-types';
import { toString } from 'ramda';
import Layout from './Layout';
import config from '../../../config';
import IconLink from '../../shared/IconLink';
import CreditIcon from '../../shared/CreditIcon';

const credit = () => {
  if (config.meta.showCredit) {
    return (
      <p>
        Built by{' '}
        <IconLink to="http://undistraction.com">
          <CreditIcon />Undistraction
        </IconLink>
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
