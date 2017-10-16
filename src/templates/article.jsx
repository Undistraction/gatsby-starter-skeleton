// eslint-disable react/no-danger

import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import Metadata from '../components/Metadata/Metadata';

const Article = ({ data }) => {
  const article = data.markdownRemark;
  const { metadata } = article.fields;
  return (
    <article>
      <Metadata {...metadata} />
      <header>{article.frontmatter.title}</header>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </article>
  );
};

Article.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Article;

export const query = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        metadata {
          keywords
          description
          title
        }
      }
    }
  }
`;
