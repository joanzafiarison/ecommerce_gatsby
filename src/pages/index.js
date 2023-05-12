import React , {useState} from "react"
import Product from "../components/Product.js";
import { createContext, useContext} from 'react';
import {checkout_context} from '../services/context.js';
import SizeSwitcher from "../components/SizeSwitcher.js";
import Checkout from "../components/Checkout.js";

import "../styles/style.scss";



const pageStyles = {
  padding: 96,
  //fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display:"flex",
}

const sizeElement = {
  backgroundColor:"#ECECEC",
  borderRadius:"100%",
  width:30,
  height:30,
  display:"flex",
  justifyContent:"center",
  alignItems :"center",
  fontWeight:"light",
  fontSize:11
}





const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}



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



//let products = generateProduct();
//console.log("PRD",products)
//Overlay : No Overlay yet
//Checkout: Toogle OK , add product ?
//products : Design :?


const array1 = [10,20];
const IndexPage = () => {
  const [overlay,setOverlay] = React.useState(false)
  const [products,setProducts] = React.useState(generateProduct())
  const [size,setSize] = React.useState("XS");
  const [checkout, setCheckout] = React.useState([])
  console.log("reduce ex ",checkout.map(el=>el.price).reduce((acc, current)=> acc + current, 0))
  //lorsque l'on fait checkout_context.Provider value={{checkout, setCheckout}}
  // on set le context
  return (
    <main style={{...pageStyles,position:"relative"}}>
      <checkout_context.Provider value={{checkout, setCheckout, overlay , setOverlay, size, setSize}}>
          <SizeSwitcher/>
          <div style={{alignItems:"center"}}>
            <div className="product_grid">
                {products.map(el=>(
                  <Product key={el.id} price={el.price} name={el.name}/>
                ))}
            </div>
          </div>
          <Checkout/>
      </checkout_context.Provider>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
