const axios = require("axios");
const dotenv = require("dotenv")
dotenv.config()
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
 function getInstagramData(){
 return axios.get(`https://graph.facebook.com/v3.2/${process.env.INSTAGRAM_USER_ID}? fields=business_discovery.username(stanley_videaste){followers_count,media_count,media{id_caption,comments_count,like_count,timestamp,username,media_product_type,media_type,owner_permalink,media_url}}&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`)
                             
}


exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    //getDatafrom api
     
    console.log("on create page ")
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/)) {
      page.matchPath = "/app/*"
  
      // Update the page.
      createPage(page)
    }


  }