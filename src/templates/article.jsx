// eslint-disable react/no-danger

import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import { findIndex, pathEq } from 'ramda';
import Metadata from '../components/Metadata/Metadata';
import ArticleNav from '../components/ArticleNav/ArticleNav';
import TagsList from '../components/TagsList/TagsList';

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

const ArticlePage = ({ data }) => {
  const article = data.markdownRemark;
  const articles = data.allMarkdownRemark.edges;
  const { metadata, tags } = article.fields;
  const { frontmatter } = article;
  return (
    <article>
      <Metadata {...metadata} />
      <header>{frontmatter.title}</header>
      <ArticleNav
        previousArticle={previousArticle(article, articles)}
        nextArticle={nextArticle(article, articles)}
      />
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
      <TagsList tags={tags} />
    </article>
  );
};

ArticlePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default ArticlePage;

export const query = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        keywords
      }
      fields {
        tags
        metadata {
          description
          title
          keywords
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
