// eslint-disable react/no-danger

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { findIndex, pathEq } from 'ramda';
import Metadata from '../../components/Metadata';
import ArticleNav from '../../components/ArticleNav';
import TagList from '../../components/TagList';
import HTMLText from '../../components/shared/HTMLText';

const nodeIdPath = pathEq(['node', 'id']);

const previousArticle = (article, articles) => {
  const currentId = article.id;
  const currentIndex = findIndex(nodeIdPath(currentId))(articles);
  return currentIndex > 0 ? articles[currentIndex - 1].node : null;
};

const nextArticle = (article, articles) => {
  const currentId = article.id;
  const currentIndex = findIndex(nodeIdPath(currentId))(articles);
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
      <Img sizes={frontmatter.image.childImageSharp.sizes} />
      <header>{frontmatter.title}</header>
      <ArticleNav
        previousArticle={previousArticle(article, articles)}
        nextArticle={nextArticle(article, articles)}
      />
      <HTMLText htmlText={article.html} />
      <TagList tags={tags} />
    </article>
  );
};

ArticlePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default ArticlePage;
