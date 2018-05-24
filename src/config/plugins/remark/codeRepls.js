module.exports = structure => ({
  resolve: `gatsby-remark-code-repls`,
  options: {
    // Optional default link text.
    // Defaults to "REPL".
    // eg <a href="...">Click here</a>
    defaultText: `Open in REPL`,

    // Optional runtime dependencies to load from NPM.
    // This option only applies to REPLs that support it (eg CodeSandbox).
    // eg ['react', 'react-dom'] or ['react@15', 'react-dom@15']
    // dependencies: ['react', 'react-dom'],

    // Article code links are relative to this dir.
    // eg examples/path/to/file.js
    directory: `${process.cwd()}/src/content/${structure.codeDir}`,

    // Optional externals to load from a CDN.
    // This option only applies to REPLs that support it (eg Codepen).
    // eg '//unpkg.com/react/umd/react.development.js'
    // externals: [],

    // Optional HTML contents to inject into REPL.
    // Defaults to `<div id="root"></div>`.
    // This option only applies to REPLs that support it (eg Codepen, CodeSandbox).
    // eg '<div id="root"></div>'
    // html: '<div class="repl"></div>',

    // Optional path to a custom redirect template.
    // The redirect page is only shown briefly,
    // But you can use this setting to override its CSS styling.
    // redirectTemplate: `${__dirname}/src/redirect-template.js`),
  },
})
