const copyLinkedFiles = require('./remark/copyLinkedFiles')
const images = require('./remark/images')
const prismjs = require('./remark/prismjs')
const embedSnippet = require('./remark/embedSnippet')
const codeRepls = require('./remark/codeRepls')

// function firstFourLines(file) {
//   console.log('@@@@@@@@@@@@@@@@@@FILE', file)
//   file.excerpt = file.content
//     .split('\n')
//     .slice(0, 8)
//     .join(' ')
// }

module.exports = ({ media, structure }) => ({
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      'gatsby-remark-responsive-iframe',
      copyLinkedFiles(structure.downloadsDir),
      images(media.images),
      prismjs(),
      embedSnippet(structure),
      codeRepls(structure),
    ],
  },
})
