const { reduce, append } = require(`ramda`)

module.exports = reduce(
  (acc, path) =>
    append(
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path,
        },
      },
      acc
    ),
  []
)
