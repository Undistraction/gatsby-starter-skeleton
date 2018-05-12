import PropTypes from 'prop-types'
import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    // eslint-disable-next-line global-require, import/no-unresolved, import/no-webpack-loader-syntax
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
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
  let css
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    )
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
          href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,400i,700,700i|Berkshire+Swash"
          rel="stylesheet"
        />
        <link rel="icon" href="favicons/favicon.ico?v=2" />
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
  )
}

html.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  htmlAttributes: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  bodyAttributes: PropTypes.object,
  body: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  preBodyComponents: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  postBodyComponents: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  headComponents: PropTypes.array.isRequired,
}

html.defaultProps = {
  htmlAttributes: {},
  bodyAttributes: {},
}

export default html
