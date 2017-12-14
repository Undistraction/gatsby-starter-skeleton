// -----------------------------------------------------------------------------
// Articles List > View > ArticlesListItem
// -----------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const ExperimentsListItem = ({ experiment }) => {
  const { frontmatter, fields } = experiment;
  return (
    <div>
      <date>{frontmatter.date}</date>{' '}
      <Link to={fields.slug}>{frontmatter.title}</Link>
      <p>{experiment.excerpt}</p>
    </div>
  );
};

ExperimentsListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  experiment: PropTypes.object.isRequired,
};

export default ExperimentsListItem;
