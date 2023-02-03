import * as React from "react"
import Product from "../components/Product.js";
import { createContext, useContext} from 'react';

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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




const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
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

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}



let panier = [
  {"name":"Shoed1","image":"url"},
  {"name":"Shoed1","image":"url"},
  {"name":"Shoed1","image":"url"},
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
      "price":Math.round(Math.random()*120),
      "image":images[type],
      "id":id++
    })
    i++;

  }
  //console.log(data);
  return data;
}

const sizes = ["XS","S","M","L","XL"];
const checkout_context = createContext({
  "checkout":panier
});

//let products = generateProduct();
//console.log("PRD",products)
//Overlay : No Overlay yet
//Checkout: Toogle OK , add product ?
//products : Design :?
const Contexted = () =>{
  const ctx = useContext(checkout_context);
  console.log("ctx",ctx)
  
  return (
    <div>
      {ctx.checkout.map(it=>(
        <div className="item">
          <p>{it.name}</p>
          <p>{it.image}</p>
        </div>
      ))}
    </div>
  )
}
const IndexPage = () => {
  const [overlay,setOverlay] = React.useState(false)
  const [products,setProducts] = React.useState(generateProduct())
  const [size,setSize] = React.useState("XS");
  const [amount,setAmount] = React.useState(0.00)

  
  return (
    <main style={{...pageStyles,position:"relative"}}>
      <checkout_context.Provider value={{"checkout":panier}}>
      <div>
        <h2>Tailles:</h2>
        <div className="sizes" style={{display:"flex",flexWrap:"wrap",width:"15vw",height:"20vh",justifyContent:"space-around",marginRight:10}}>
          {sizes.map(s=>(
            <div key={s} onClick={()=>setSize(s)} style={{...sizeElement,backgroundColor:size===s? "green":"grey"}}>{s}</div>
          ))}
        </div>
      </div>
      <div style={{alignItems:"center"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
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
                <div>
                  <Contexted/>
                </div>
                <div style={{backgroundColor:"#1B1A20",border:"1px solid black",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div>
                      <p>Sous total</p>
                      <p>{amount} $</p>
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
