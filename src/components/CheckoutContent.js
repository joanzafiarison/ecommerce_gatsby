import React, {useContext, useState} from "react";
import { checkout_context } from "../services/context";


const Contexted = () =>{
    const {checkout, setCheckout} = useContext(checkout_context);
    const [quantity, setQuantity] = useState(1);
  
    function remove_(i){
      setCheckout(checkout.filter((v,k)=> k!==i));
  
    }

    function updateQuantity(i,nb){
      let newData = [...checkout];
      if(newData[i].quantity >= 0){
        newData[i].quantity = nb;
        setCheckout(newData);
      }
    }
  
    return (
      <>
        {checkout.map((it,i)=>(
          <div className="item" key={i}>
            <div className="item_image">
            </div>
            <div className="meta">
                <p className="meta_title">{it.name}</p>
                <p className="meta_detail">S | Marque</p>
                <p className="meta_detail">X {it.quantity}</p>
            </div>
           
            <div>
                <button onClick={()=>remove_(i)}>X</button>
                <p>{parseFloat(it.price)} $</p>
                <div style={{display: "flex"}}>
                    <button onClick={()=>updateQuantity(i, checkout[i].quantity + 1)}>+</button>
                    <button onClick={()=>updateQuantity(i, checkout[i].quantity -1)}>-</button>
                </div>

            </div>
          </div>
        ))}
      </>
    )
  }

export default Contexted;