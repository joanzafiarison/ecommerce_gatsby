//import { getProducts } from "./src/services/products.js";
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

async function getProducts () {
  return await axios.get("https://api.printful.com/store/products/308490756",
                  {
                      headers : { 
                          'Authorization' : `Bearer ${process.env.PRINTFUL_API_KEY}`
                      }
                  })
                  .then(res => res.data)
} 
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
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

    if( page.path.match(/^\/test/)) {
      let products = await getProducts();
      console.log("products ",products)
      page.matchPath = "/test"
      console.log("create test page");
      createPage({
        path :"/test",
        component : require.resolve("./src/pages/test.js"),
        context : {products}
      });
    }
  }