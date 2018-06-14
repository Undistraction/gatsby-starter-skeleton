module.exports = structure => ({
  resolve: `gatsby-remark-embed-snippet`,
  options: {
    // Class prefix for <pre> tags containing syntax highlighting;
    // defaults to 'language-' (eg <pre class="language-js">).
    // If your site loads Prism into the browser at runtime,
    // (eg for use with libraries like react-live),
    // you may use this to prevent Prism from re-processing syntax.
    // This is an uncommon use-case though;
    // If you're unsure, it's best to use the default value.
    classPrefix: `language-`,

    // Llinks are relative to this dir.
    // eg examples/path/to/file.js
    directory: `${process.cwd()}/src/content/${structure.codeDir}`,
  },
})
