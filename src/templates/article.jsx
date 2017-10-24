// eslint-disable react/no-danger

import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import { findIndex, pathEq } from 'ramda';
import Metadata from '../components/Metadata/Metadata';
import ArticleNav from '../components/ArticleNav/ArticleNav';

const previousArticle = (article, articles) => {
  const currentId = article.id;
  const currentIndex = findIndex(pathEq(['node', 'id'])(currentId))(articles);
  return currentIndex > 0 ? articles[currentIndex - 1].node : null;
};

const nextArticle = (article, articles) => {
  const currentId = article.id;
  const currentIndex = findIndex(pathEq(['node', 'id'])(currentId))(articles);
  return currentIndex < articles.length - 1
    ? articles[currentIndex + 1].node
    : null;
};

const Article = ({ data }) => {
  const article = data.markdownRemark;
  const articles = data.allMarkdownRemark.edges;
  const { metadata } = article.fields;
  return (
    <article>
      <Metadata {...metadata} />
      <header>{article.frontmatter.title}</header>
      <ArticleNav
        previousArticle={previousArticle(article, articles)}
        nextArticle={nextArticle(article, articles)}
      />
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
      id
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/src/content/articles/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
