module.exports = {
  siteMetadata: {
    title: `Jonathan Picazo`,
    description: `Herein lies the portfolio page of Jonathan Picazo. Along with an introduction, you can also browse through his projects and other skills. Should you wish to reach out, there is a blog section where you can view his thoughts.`,
    author: `@macjabeth`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/layouts/index.js')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jonathan Picazo`,
        short_name: `JP`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
