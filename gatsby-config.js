/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();

module.exports = {
  flags : {
    DEV_SSR: false
  },
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
    },
    {
      resolve : "gatsby-plugin-google-gtag",
      options : {
        trackingIds :[
           process.env.GOOGLE_ANALYTICS,
        ],
        pluginConfig : {
          //put google tag in head
          head : true,
        }
      }
    },
    /*
    {
      resolve : "plugin",
      options : {
        endpoint: "https://graph.facebook.com/v3.2/",
        message : "Hello",
        access_token : process.env.INSTAGRAM_ACCESS_TOKEN,
        instagram_user_id : process.env.INSTAGRAM_USER_ID,
        instagram_user_name : process.env.INSTAGRAM_USER_NAME,
      }
    }*/
]
};