import React, {useContext} from "react";
import { payment_context } from "../../services/context";
import { process_payment } from "../../services/payment";

const CommandProcess = ({products}) => {
    const ctx = useContext(payment_context);
    console.log("deliv ctx", ctx)
    const date = new Date().toDateString();//.now().toString()
    const id = Math.round(Math.random()*1000)
    console.log("products ",products);

    function processCheckout(){
        process_payment(products); 
    }
    return(
        <div>
            <h2>Commande #{id}</h2>
            <p>{date}</p>
            <p>Récapitulatif de la commande</p>
            {products.map(el=>(
                <div className="item">
                    <p>{el.name}</p>
                    <p>{el.price} $</p>
                    <p>quantité {el.quantity}</p>
                </div>
            ))}
            <p>Total : {products.map(el=>parseInt(el.price)  * parseInt(el.quantity)).reduce((acc, value)=> acc + value)} $</p>
            <button onClick={()=>processCheckout()}>Payer avec checkout</button>
        </div>
    )
}

export default CommandProcess;