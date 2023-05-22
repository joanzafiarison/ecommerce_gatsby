import React, {useContext} from "react";
import {checkout_context} from "../services/context";


const Product = ({name, price}) =>{
    const { checkout, setCheckout, overlay, setOverlay } = useContext(checkout_context);
    function addProduct(name, price) {
      const newData = [...checkout];
      console.log(`${name} ajouté, cela coûte ${price} euros`)
      //if product existe deja on ajoute + 1
      let isNew = checkout.findIndex(el => el.name !== name && el.price !==price);
      if( isNew == -1){
        setCheckout([...checkout, {"name" : name, "price" : price, quantity:1}]);
        setOverlay(true);
      }
      else{
        const modifiedData = checkout[isNew];
        modifiedData.quantity +=1;
        newData[isNew] = modifiedData;
        setCheckout(newData); 
      }
    }
    return(
    <div className="product">
        <div className="product_image">
        </div>
        <p className="product_name">{name}</p>
        <p className="price">$ {price.split(".")[0]}.<span>{price.split(".")[1]}</span></p>
        <button className="add_button" onClick={()=> addProduct(name, price)}>Ajouter au panier</button>
      </div>
    )
}


export default Product;