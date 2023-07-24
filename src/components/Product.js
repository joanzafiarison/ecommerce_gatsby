import React, {useContext} from "react";
import {checkout_context} from "../services/context";
import {getProducts, handleProducts} from "../services/checkout";

//CheckoutPaiement?
const Product = ({name, price, images, desc}) =>{
    const { checkout, setCheckout, overlay, setOverlay } = useContext(checkout_context);
    //console.log("current product ", getProducts());
    function addProduct(name, price) {
      let newData = [...checkout];
      console.log(`${name} ajouté, cela coûte ${price} euros`)
      //if product existe deja on ajoute + 1
      let isNew = checkout.findIndex(el => el.name === name && el.price ===price);
      
      if( isNew !== -1){
        const modifiedData = checkout[isNew];
        modifiedData.quantity +=1;
        newData[isNew] = modifiedData; 
      }
      else{
        newData = [...checkout, {"name" : name, "price" : price, quantity:1}];  

      }
      handleProducts({
        "products": newData
      });
      console.log("get items", window.localStorage.getItem("ecom_products"))
      setCheckout(newData);
      console.log("checkout products",checkout)
      setOverlay(true);
    }
    return(
    <div className="product">
        <div className="product_image">
          <img src={images} style={{width:"100%"}} alt={desc}/>
        </div>
        <p className="product_name">{name}</p>
        <p className="price">$ {price.split(".")[0]}.<span>{price.split(".")[1]}</span></p>
        <button className="add_button" onClick={()=> addProduct(name, price)}>Ajouter</button>
      </div>
    )
}


export default Product;