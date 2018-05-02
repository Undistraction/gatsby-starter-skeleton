module.exports = () => ({
  resolve: `gatsby-plugin-favicon`,
  options: {
    logo: `./src/images/favicon/favicon.png`,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: false,
      favicons: true,
      firefox: true,
      twitter: true,
      yandex: false,
      windows: false,
    },
  },
})
