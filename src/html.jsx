import React from 'react';
import PropTypes from 'prop-types';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    // eslint-disable-next-line global-require, import/no-unresolved, import/no-webpack-loader-syntax
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}

const html = ({
  htmlAttributes,
  bodyAttributes,
  body,
  preBodyComponents,
  postBodyComponents,
  headComponents,
}) => {
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    );
  }
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cousine:400,400i,700,700i"
          rel="stylesheet"
        />
        {headComponents}
        {css}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
};

html.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  htmlAttributes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  bodyAttributes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  body: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  preBodyComponents: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  postBodyComponents: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  headComponents: PropTypes.object.isRequired,
};

export default html;
