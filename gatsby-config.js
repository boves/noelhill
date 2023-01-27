/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Noel Hill`,
    siteUrl: `https://www.noelhill.com`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,

      }
    },
    "gatsby-plugin-mdx",
  ],
}
