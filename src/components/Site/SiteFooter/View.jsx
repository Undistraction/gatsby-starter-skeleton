import React from 'react';
import PropTypes from 'prop-types';
import { toString } from 'ramda';
import ViewWrapper from './ViewWrapper';

const SiteFooter = ({ metadata }) => {
  const currentYear = toString(new Date().getFullYear());
  const { owner, startYear } = metadata;
  const dateRange =
    currentYear === startYear ? currentYear : `${startYear}–${currentYear}`;

  return (
    <ViewWrapper>
      <p>
        Site and contents &copy; {owner} {dateRange}.
      </p>
    </ViewWrapper>
  );
};

SiteFooter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  metadata: PropTypes.object.isRequired,
};

export default SiteFooter;
