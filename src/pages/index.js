import React , {useState} from "react"
import Product from "../components/Product.js";
import { createContext, useContext} from 'react';
import {checkout_context} from '../services/context.js';
import "../styles/style.scss";


let colors = {
  "grey_clear":"#ECECEC;"
}

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



let panier = [
  {"name":"made_up", "image":"myimage"}
]


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

const sizes = ["XS","S","M","L","XL"];
//const checkout_context = createContext();

//let products = generateProduct();
//console.log("PRD",products)
//Overlay : No Overlay yet
//Checkout: Toogle OK , add product ?
//products : Design :?
const Contexted = () =>{
  const {checkout, setCheckout} = useContext(checkout_context);
  const [quantity, setQuantity] = useState(1);

  function remove_(i){
    setCheckout(checkout.filter((v,k)=> k!==i));

  }

  return (
    <div>
      {checkout.map((it,i)=>(
        <div className="item" key={i}>
          <p>Produit : {it.name}</p>
          <p>Price : {it.price}</p>
          <p>Quantité :{quantity}</p>
          <button onClick={()=>setQuantity(quantity+1)}>+</button>
          <button onClick={()=>setQuantity(quantity > 0 ? quantity-1 : quantity)}>-</button>
          <button onClick={()=>remove_(i)}>X</button>
        </div>
      ))}
    </div>
  )
}

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
      <checkout_context.Provider value={{checkout, setCheckout, overlay , setOverlay}}>
      <div>
        <h2>Tailles:</h2>
        <div className="sizes" style={{display:"flex",flexWrap:"wrap",width:"15vw",justifyContent:"space-around",marginRight:10}}>
          {sizes.map(s=>(
            <div className="size" key={s} onClick={()=>setSize(s)} style={{backgroundColor:size===s? "black" : colors["grey_clear"]}}>{s}</div>
          ))}
        </div>
      </div>
      <div style={{alignItems:"center"}}>
        <div className="product_grid">
            {products.map(el=>(
              <Product key={el.id} price={el.price} name={el.name}/>
            ))}
        </div>
      </div>
      <div>
          
          
          <div style={{display:"block",backgroundColor:"#1B1A20",position:"fixed",right:0,top:0,color:"white"}}>
            <p onClick={()=>setOverlay(!overlay)}><img alt="cart"/></p>
            <div style={{display:overlay? "flex":"none",width:"33vw",height:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
                <p>Panier</p>
                <div style={{overflow:"hidden",height:"100%"}}>
                  <Contexted/>
                </div>
                <div style={{backgroundColor:"#1B1A20",border:"1px solid black",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div>
                      <p>Sous total</p>
                      <p> {checkout.map(el=>el.price).reduce((acc, current)=> parseInt(acc) + parseInt(current), 0)}$</p>
                    </div>
                    <button>Commander</button>
                </div>
            </div>
          </div>
      </div>
      </checkout_context.Provider>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
