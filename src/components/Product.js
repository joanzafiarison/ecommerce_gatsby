import React, {useContext} from "react";
import {checkout_context} from "../services/context";
import {getProducts, handleProducts} from "../services/checkout";

//CheckoutPaiement?
const Product = ({name, price, images, desc}) =>{
    const { checkout, setCheckout, overlay, setOverlay } = useContext(checkout_context);
    //console.log("current product ", getProducts());
    function addProduct(name, price, images) {
      let newData = [...checkout];
      console.log(`${name} ajouté, cela coûte ${price} euros`)
      console.log("image ",images[0])
      //if product existe deja on ajoute + 1
      let isNew = checkout.findIndex(el => el.name === name && el.price ===price);
      
      if( isNew !== -1){
        const modifiedData = checkout[isNew];
        modifiedData.quantity +=1;
        newData[isNew] = modifiedData; 
      }
      else{
        newData = [...checkout, {"name" : name, "price" : price, image : images[0], quantity:1}];  

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
          <img src={images[0]} style={{width:"100%", height:"100%"}} alt={desc}/>
        </div>
        <p className="product_name">{name}</p>
        <p className="price">$ {price.split(".")[0]}.<span>{price.split(".")[1]}</span></p>
        <button className="add_button" onClick={()=> addProduct(name, price, images)}>Ajouter</button>
        <button>Voir</button>
      </div>
    )
}


export default Product;