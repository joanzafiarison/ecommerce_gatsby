import React from "react";
import SizeSwitcher from "../components/SizeSwitcher";
import Checkout from "../components/Checkout";
import Product from "../components/Product";
import {checkout_context} from '../services/context.js';

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
  

const Home = () => {
    const [overlay,setOverlay] = React.useState(false)
    const [products,setProducts] = React.useState(generateProduct())
    const [size,setSize] = React.useState("XS");
    const [checkout, setCheckout] = React.useState([])
    console.log("reduce ex ",checkout.map(el=>el.price).reduce((acc, current)=> acc + current, 0))
    return(
        <checkout_context.Provider value={{checkout, setCheckout, overlay , setOverlay, size, setSize}}>
            <div id="hero">
                <div>
                    <h1>Vetement 1</h1>
                </div>
                <div>
                    <h1>Vetement 2</h1>
                </div>
                </div>
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