import React from 'react';
import PropTypes from 'prop-types';
import { pluck } from 'ramda';
import ArticleList from '../../components/ArticleList';

const TagPage = ({ data, pathContext }) => {
  if (!data.allMarkdownRemark) {
    return <p>No tags found for: {pathContext.tag}</p>;
  }
  const articles = pluck('node')(data.allMarkdownRemark.edges);
  const { totalCount: itemCount } = data.allMarkdownRemark;
  return (
    <div>
      <header>Filed under:{pathContext.tag}</header>
      <div>
        <header>{itemCount} Articles</header>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
};

TagPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pathContext: PropTypes.object.isRequired,
};

export default TagPage;
