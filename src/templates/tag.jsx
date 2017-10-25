import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import { pluck } from 'ramda';
import Tags from '../components/Tags/Tags';

const TagPage = ({ data, pathContext }) => {
  console.log('TAGS', pathContext.tag);
  console.dir(data.allMarkdownRemark.edges[0]);
  if (!data.allMarkdownRemark) {
    return <p>No tags found for: {pathContext.tag}</p>;
  }
  const articles = pluck('node')(data.allMarkdownRemark.edges);
  const { totalCount: itemCount } = data.allMarkdownRemark;
  return (
    <div>
      <header>Filed under:{pathContext.tag}</header>
      <div>
        <Tags articles={articles} itemCount={itemCount} />
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

export const pageQuery = graphql`
  query TagQuery($tag: String) {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            tags
          }
          frontmatter {
            title
            keywords
            date
          }
        }
      }
    }
  }
`;
