import React, {useContext} from "react";
import {checkout_context} from "../services/context";


const Product = ({name, price}) =>{
    const { checkout, setCheckout } = useContext(checkout_context);
    function addProduct(name, price) {
      console.log(`${name} ajouté, cela coûte ${price} euros`)
      setCheckout([...checkout, {"name" : name, "price" : price}])
    }
    return(
    <div style={{display:"flex", flexDirection: "column", alignItems:"center"}}>
        <div style={{width:100,height:150,backgroundColor:"grey",border:"1px solid black",margin:30}}>
        </div>
        <p>{name}</p>
        <p>$ {price}</p>
        <button onClick={()=> addProduct(name, price)}>Ajouter au panier</button>
      </div>
    )
}


export default Product;