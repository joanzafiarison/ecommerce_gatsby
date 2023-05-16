import React , {useEffect} from "react";
import SizeSwitcher from "../components/SizeSwitcher";
import Checkout from "../components/Checkout";
import Product from "../components/Product";
import HeroProduct from "../components/HeroProduct";
import {checkout_context} from '../services/context.js';
import t_shirt_img from "../images/t-shirt.png";
import rash_img from "../images/rash1.webp";

function generateProduct(){
    let i =0; 
    let id =42;
    let data = [];
    let names = ["pants","sweatshirt","hoodie","tshirt","coat"];
    let adjectives = ["classy","cosy","regular","chic","fire"];
    let images = {
      "pants":"",
      "sweatshirt":"",
      "hoodie":"",
      "tshirt":"",
      "coat":""
    }
  
    while(i<10){
      let type = names[Math.floor(Math.random()*4)];
      let randomName = `${type} ${adjectives[Math.floor(Math.random()*4)]}`
      data.push({
        "name":randomName,
        "stock":Math.round(Math.random()*50),
        "price":`${Math.round(Math.random()*120)}.${Math.round(Math.random()*99)}`,
        "image":images[type],
        "id":id++
      })
      i++;
  
    }
    //console.log(data);
    return data;
  }
  
  const featured_products_ = [
    {
        "name" :"T shirt manche longue de type compression",
        "id" :678,
        "img" : rash_img
    },
    {
        "name" :"T shirt et Sweats",
        "id" :679,
        "img" : t_shirt_img
    }
]

const Home = () => {
    const [overlay,setOverlay] = React.useState(false);
    const [products,setProducts] = React.useState(generateProduct());
    const [featuredProducts, setFeaturedProducts] = React.useState([]);
    const [size,setSize] = React.useState("XS");
    const [checkout, setCheckout] = React.useState([]);

    useEffect(() => {
        //kind of api call
        setFeaturedProducts(featured_products_);
    },[])
   
    return(
        <checkout_context.Provider value={{checkout, setCheckout, overlay , setOverlay, size, setSize}}>
                <div id="hero">
                    { featuredProducts.map( fp => (
                        <HeroProduct name={fp.name} key={fp.id} img={fp.img}/>
                    ))
                    }
                </div>
                <form id="search">
                    <label>
                        Rechercher : 
                        <input type="text" name="recherche" id="recherche"/>
                        <button className="search_button"></button>
                    </label>
                </form>
                <div className="main_container">
                    <SizeSwitcher/>
                    <div style={{alignItems:"center"}}>
                    <div className="product_grid">
                        {products.map(el=>(
                            <Product key={el.id} price={el.price} name={el.name}/>
                        ))}
                    </div>
                    </div>
                    <Checkout/>
                </div>
        </checkout_context.Provider>
    )
}

export default Home;