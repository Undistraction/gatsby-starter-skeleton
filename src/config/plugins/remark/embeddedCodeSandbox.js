module.exports = structure => ({
  resolve: `gatsby-remark-embedded-codesandbox`,
  options: {
    // Example code folders are relative to this dir.
    // eg src/_examples/some-example-folder
    directory: `${process.cwd()}/src/content/${structure.codeDir}/`,
    // Customise Codesandbox embedding options:
    // https://codesandbox.io/docs/embedding#embed-options
    // default:
    embedOptions: {
      view: `editor`,
      hidenavigation: 1,
    },
    getIframe: url =>
      `<iframe src="${
        url
      }" class="embedded-codesandbox" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" width="640" height="360"></iframe>`,
  },
})
