import React from 'react';
import PropTypes from 'prop-types';
import { toString } from 'ramda';
import Layout from './Layout';

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
      <p>
        Build by{' '}
        <span role="img" aria-label="Undistraction Logo">
          ⚫{' '}
        </span>Undistraction
      </p>
    </Layout>
  );
};

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  metadata: PropTypes.object.isRequired,
};

View.displayName = 'SiteFooter';

export default View;
