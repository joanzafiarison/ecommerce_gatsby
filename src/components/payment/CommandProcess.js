import React, {useContext,useState, useEffect} from "react";
import { payment_context } from "../../services/context";
import { process_payment } from "../../services/payment";

const CommandProcess = ({products}) => {
    const ctx = useContext(payment_context);
    const [commandMeta, setCommandMeta] = useState({
        "id" : "",
        "date" : "",
        "total" : "",
    })
    console.log("deliv ctx", ctx)
    console.log("products ",products);

    useEffect(()=>{
        if(products.length>0){
            let id = Math.round(Math.random()*1000);
            let date = new Date().toDateString();//.now().toString()
            let total = products.map(el=>parseInt(el.price)  * parseInt(el.quantity)).reduce((acc, value)=> acc + value);
            setCommandMeta({
                id : id,
                date : date,
                total :total
            })
            console.log(commandMeta);
        }
    },[])
    function processCheckout(){
        process_payment(products); 
    }
    return(
        <div>
            <h2>Commande #{commandMeta.id}</h2>
            <p>Une date</p>
            <p>Récapitulatif de la commande</p>
            {products.map(el=>(
                <div className="item">
                    <p>{el.name}</p>
                    <p>{el.price} $</p>
                    <p>quantité {el.quantity}</p>
                </div>
            ))}
            <p>Total : {commandMeta.total} $</p>
            <button onClick={()=>processCheckout()}>Payer avec checkout</button>
        </div>
    )
}

export default CommandProcess;