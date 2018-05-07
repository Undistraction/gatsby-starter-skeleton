const copyLinkedFiles = require(`./remark/copyLinkedFiles`)
const images = require(`./remark/images`)
const prismjs = require(`./remark/prismjs`)
const embedSnippet = require(`./remark/embedSnippet`)
const codeRepls = require(`./remark/codeRepls`)
const smartypants = require(`./remark/smartypants`)

module.exports = ({ media, structure }) => ({
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      // Wrap iframes and objects in a responsive wrapper that maintains
      // aspect-ratio if width and height are supplied as unitless or pixel
      // values.
      `gatsby-remark-responsive-iframe`,
      // Generate downloadble links from local files
      copyLinkedFiles(structure.downloadsDir),
      images(media.images),
      prismjs(),
      embedSnippet(structure),
      codeRepls(structure),
      smartypants(),
    ],
  },
})
