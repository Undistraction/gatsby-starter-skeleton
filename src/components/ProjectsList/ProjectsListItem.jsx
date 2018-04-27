// -----------------------------------------------------------------------------
// Articles List > View > ArticlesListItem
// -----------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const ProjectsListItem = ({ project }) => {
  const { frontmatter, fields } = project;
  return (
    <div>
      <Link to={fields.slug}>
        <Img sizes={frontmatter.image.childImageSharp.sizes} />
        {frontmatter.title}
      </Link>
    </div>
  );
};

ProjectsListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object.isRequired,
};

export default ProjectsListItem;
