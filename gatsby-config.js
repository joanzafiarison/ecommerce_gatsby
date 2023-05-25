/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Ecommerce_gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon_.png"
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve : "gatsby-source-stripe",
      options : {
        objects: ["Price"],
        secretKey: process.env.STRIPE_PRIVATE,
        downloadFiles: false,
      }
    }
]
};