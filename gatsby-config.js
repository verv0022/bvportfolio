module.exports = {
  siteMetadata: {
    title: `Brandon Vervoort`,
    description: `My portfolio created with gatsbyjs`,
    author: `brandon.w.vervoort@gmail.com`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `brandonvervoort`,
        short_name: `Brandons Portfolio`,
        start_url: `/`,
        background_color: `#f7f7f7)`,
        theme_color: `#009fb8`,
        display: `minimal-ui`,
        icon: `src/images/Logos/bv-logo-light.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /Icons/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
