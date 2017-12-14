// eslint-disable react/no-danger

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { findIndex, pathEq } from 'ramda';
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
  const experiment = data.markdownRemark;
  const experiments = data.allMarkdownRemark.edges;
  const { metadata } = experiment.fields;
  const { frontmatter } = experiment;
  return (
    <article>
      <Metadata {...metadata} />
      <Img sizes={frontmatter.image.childImageSharp.sizes} />
      <header>{frontmatter.title}</header>
      <ArticleNav
        previousExperiment={previousExperiment(experiment, experiments)}
        nextExperiment={nextExperiment(experiment, experiments)}
      />
      <HTMLText htmlText={experiment.html} />
    </article>
  );
};

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

View.displayName = 'ExperimentTemplateView';

export default View;
