import React from 'react';
import CSSModules from 'react-css-modules';
import { toString } from 'ramda';
import styles from './SiteFooter.module.css';

const SiteFooter = ({ metadata }) => {
  const currentYear = toString(new Date().getFullYear());
  const { owner, startYear } = metadata;
  const dateRange =
    currentYear === startYear ? currentYear : `${startYear}–${currentYear}`;

  return (
    <footer styleName="base">
      <p>
        Site and contents &copy; {owner} {dateRange}.
      </p>
    </footer>
  );
};

SiteFooter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  metadata: React.PropTypes.object.isRequired,
};

export default CSSModules(SiteFooter, styles);
