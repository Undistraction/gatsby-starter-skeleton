// eslint-disable react/no-danger

import React from 'react';
import PropTypes from 'prop-types';
import littleLoader from 'little-loader';
import { FoldingCube } from 'styled-spinkit';

import { findIndex, pathEq } from 'ramda';
import Metadata from '../../components/Metadata';
import ScriptTag from '../../components/ScriptTag';
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

class View extends React.Component {
  componentDidMount() {
    littleLoader(
      './alpha/index.js',
      error => {
        if (error) {
          console.log(`Error loading experiment: ${error}`);
        } else {
          console.log('Loaded experiment');
          global.PlaceholderModule1({ context: this.codeWrapper });
        }
      },
      this
    );
  }
  render() {
    const { data } = this.props;
    const experiment = data.markdownRemark;
    const experiments = data.allMarkdownRemark.edges;
    const { metadata } = experiment.fields;
    const { frontmatter } = experiment;
    return (
      <article>
        <Metadata {...metadata} />
        <ScriptTag path="" />
        <header>{frontmatter.title}</header>
        <ArticleNav
          previousExperiment={previousExperiment(experiment, experiments)}
          nextExperiment={nextExperiment(experiment, experiments)}
        />
        <HTMLText htmlText={experiment.html} />
        <div
          style={{
            position: 'relative',
            minWidth: '100%',
            minHeight: '100vh',
            margin: '0 -40px',
          }}
          ref={div => {
            this.codeWrapper = div;
          }}
        >
          <FoldingCube />
        </div>
      </article>
    );
  }
}

View.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

View.displayName = 'ExperimentTemplateView';

export default View;
