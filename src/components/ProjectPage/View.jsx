// eslint-disable react/no-danger

import React from 'react';
import PropTypes from 'prop-types';
import { findIndex, pathEq } from 'ramda';
import Img from 'gatsby-image';

import Metadata from '../../components/Metadata';
import ArticleNav from '../../components/ArticleNav';
import HTMLText from '../../components/shared/HTMLText';

const nodeIdPath = pathEq(['node', 'id']);

const previousExperiment = (article, articles) => {
  const currentId = article.id;
  const currentIndex = findIndex(nodeIdPath(currentId))(articles);
  return currentIndex > 0 ? articles[currentIndex - 1].node : null;
};

const nextExperiment = (article, articles) => {
  const currentId = article.id;
  const currentIndex = findIndex(nodeIdPath(currentId))(articles);
  return currentIndex < articles.length - 1
    ? articles[currentIndex + 1].node
    : null;
};

const View = ({ data }) => {
  const project = data.markdownRemark;
  const projects = data.allMarkdownRemark.edges;
  const { metadata } = project.fields;
  const { frontmatter } = project;
  return (
    <article>
      <Metadata {...metadata} />
      <Img sizes={frontmatter.image.childImageSharp.sizes} />
      <header>{frontmatter.title}</header>
      <ArticleNav
        previousExperiment={previousExperiment(project, projects)}
        nextExperiment={nextExperiment(project, projects)}
      />
      <HTMLText htmlText={project.html} />
      <div
        style={{
          position: 'relative',
          minWidth: '100%',
          minHeight: '100vh',
          margin: '0 -40px',
        }}
      />
    </article>
  );
};

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

View.displayName = 'ExperimentTemplateView';

export default View;
