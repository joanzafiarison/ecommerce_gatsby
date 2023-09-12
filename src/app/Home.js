import React , {useEffect, useContext} from "react";
import SizeSwitcher from "../components/SizeSwitcher";
import GraphEx from "../components/GraphExemple";
import Checkout from "../components/Checkout";
import Product from "../components/Product";
import ProductDetail from "../components/ProductDetail";
import Products from "../components/Products";
import HeroProduct from "../components/HeroProduct";
import SocialMedia from "../components/SocialMedia";
import Contact from "../components/Contact";
import {checkout_context, DataProvider} from '../services/context.js';
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
        "name" :"NOUVELLE COLLECTION EN PRECOMMANDE",
        "id" :678,
        "desc": "Participe au lancement de la marque en précommandant ta tenue de combat",
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

    const [search, setSearch] = React.useState("Red");
    const [results, setResults] = React.useState("");
    const [page, setPage] = React.useState(0);
   

    console.log('req',results)

    //const [size,setSize] = React.useState("XS");
    //const [checkout, setCheckout] = React.useState([]);

    function submitSearch (e){
        e.preventDefault();
    }

    useEffect(() => {
        //kind of api call
        setFeaturedProducts(featured_products_);
    },[])

    useEffect(() => {
        //kind of api call
        console.log("search call",search);
        //setResults(res_site)
    },[search])
   
    return(
        <>

                <div id="hero">
                    { featuredProducts.map( fp => (
                        <HeroProduct name={fp.name} key={fp.id} img={fp.img} desc={fp.desc}/>
                    ))
                    }
                </div>
                <div id="searchElement">
                    <form id="search" onSubmit={submitSearch}>
                        <label>
                            <input type="text" name="recherche" placeholder="Rechercher par nom..."id="recherche" onChange={(e) => setSearch(e.target.value)}/>
                            <button className="search_button">O</button>
                            <GraphEx search={`/${search}/`}/>
                        </label>
                    </form>
                    
                </div>
                <div className="main_container">
                    <SizeSwitcher/>
                    <div style={{alignItems:"center", margin:"auto",gridColumnStart: 1,gridColumnEnd: 6}}>
                        <Products page={page} weight={5}/>
                        <div className="pagination">
                            <button className="button-1" onClick={()=>setPage(0)}>1</button>
                            <button className="button-2" onClick={()=>setPage(1)}>2</button>
                        </div>
                        <SocialMedia/>
                        <Contact/>
                    </div>
                    <Checkout/> 
                </div>
                <p style={{ display : ctx.overlayMessage !== "" ? "flex": "none", position :"fixed" , zIndex : 10, minWidth :80, top : "5%", left :"75%", backgroundColor :"green", padding :15, borderRadius :5, color :"white" , fontSize :18}}>{ctx.overlayMessage}</p>
                { Object.keys(ctx.productDetail).length > 0 && <ProductDetail/> }
 
        </>
    )
}

export default Home;