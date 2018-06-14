const copyLinkedFiles = require(`./remark/copyLinkedFiles`)
const images = require(`./remark/images`)
const prismjs = require(`./remark/prismjs`)
const embedSnippet = require(`./remark/embedSnippet`)
const codeRepls = require(`./remark/codeRepls`)
const embeddedCodeSandbox = require(`./remark/embeddedCodeSandbox`)
const smartypants = require(`./remark/smartypants`)

module.exports = ({ media, structure }) => ({
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      // Easy video embed
      `gatsby-remark-embed-video`,
      // Use Code Sandbox to embed code from a 'code' directory via reference
      embeddedCodeSandbox(structure),
      // Wrap iframes and objects in a responsive wrapper that maintains
      // aspect-ratio if width and height are supplied as unitless or pixel
      // values.
      `gatsby-remark-responsive-iframe`,
      // Generate downloadble links from local files
      copyLinkedFiles(structure.downloadsDir),
      // Encode multiple versions of images for different screen sizes and
      // resolutions
      images(media.images),
      // Embed code from a 'code' directory via reference
      embedSnippet(structure),
      // Highlighting for code blocks
      prismjs(),
      // Open code from a 'code' directory in a REPL
      codeRepls(structure),
      // Small embellishments to text
      smartypants(),
    ],
  },
})
