import React , {useEffect, useContext} from "react";
import SizeSwitcher from "../components/SizeSwitcher";
import Checkout from "../components/Checkout";
import Product from "../components/Product";
import Products from "../components/Products";
import HeroProduct from "../components/HeroProduct";
import SocialMedia from "../components/SocialMedia";
import {checkout_context} from '../services/context.js';
import t_shirt_img from "../images/t-shirt.png";
import rash_img from "../images/rash1.webp";


//
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
        "name" :"COMBAT READY",
        "id" :678,
        "desc": "PRET POUR LA GUERRE",
        "img" : rash_img
    },
]

const Home = ({location}) => {
    const ctx = useContext(checkout_context); 
    const display = false;
    console.log("context ",ctx);
    console.log('location', location)
    //const [overlay,setOverlay] = React.useState(false);
    const [products,setProducts] = React.useState(generateProduct());
    const [featuredProducts, setFeaturedProducts] = React.useState([]);
    //const [size,setSize] = React.useState("XS");
    //const [checkout, setCheckout] = React.useState([]);
    
    useEffect(() => {
        //kind of api call
        setFeaturedProducts(featured_products_);
    },[])
   
    return(
        <>

                <div id="hero">
                    { featuredProducts.map( fp => (
                        <HeroProduct name={fp.name} key={fp.id} img={fp.img} desc={fp.desc}/>
                    ))
                    }
                </div>
                <form id="search">
                    <label>
                        <input type="text" name="recherche" placeholder="Rechercher par nom..."id="recherche"/>
                        <button className="search_button">O</button>
                    </label>
                </form>
                <div className="main_container">
                    <SizeSwitcher/>
                    <div style={{alignItems:"center", margin:"auto"}}>
                    <div className="product_grid">
                        {products.map(el=>(
                            <Product key={el.id} price={el.price} name={el.name}/>
                        ))}
                    </div>
                    <div>
                        <h2>Produits Stripe</h2>
                        <Products/>
                    </div>
                    <SocialMedia/>
                    <div style={{ display:"flex", flexDirection:"column",alignItems:"center",backgroundColor:"rgb(52 213 106)", width:"100%", margin:0, padding:"2rem 0"}}>
                        <h2>On vous tient au courant via la newsletter!</h2>
                        <form action="#" style={{width:"85%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <p><input type="text" name="email"/></p>
                            <p><input type="submit" value="C'est parti" style={{border:"none"}}/></p>
                        </form>
                    </div>
                    </div>
                    <Checkout/> 
                </div>
 
        </>
    )
}

export default Home;