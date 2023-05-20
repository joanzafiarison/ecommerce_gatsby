import axios from "axios"; 
import * as dotenv from "dotenv";

dotenv.config();



async function getProducts () {
    return await axios.get("https://api.printful.com/store/products/308490756",
                    {
                        headers : { 
                            'Authorization' : `Bearer ${process.env.PRINTFUL_API_KEY}`
                        }
                    })
} 

export {getProducts}