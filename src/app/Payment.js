import React, {useState, useContext} from "react";
import { checkout_context, CheckoutProvider , payment_context, PaymentProvider} from "../services/context";
import PaymentProcess from "../components/payment/PaymentProcess.js";
import CommandProcess from "../components/payment/CommandProcess";
import DeliveryProcess from "../components/payment/DeliveryProcess";

const product_test = [
    {
        "name":"tshirt",
        "price":25.56,
        "quantity":2
    },
    {
        "name":"rash",
        "price":50.56,
        "quantity":1
    }
]



const PaymentSwitcher = ({step, products}) =>  {
    const ctx = useContext(payment_context);
    console.log(ctx)
    console.log("step",step)
    function renderComponent (step){
        switch(step){
            case "commande" :
                return <CommandProcess products={products}/>
            case "livraison":
                return <DeliveryProcess/>
            case "paiement":
                return <PaymentProcess/>
            default :
                <p>Pas d'élément</p>
        }
    }
    return(
        <>
            {renderComponent(step)}
        </>
    )
}
const processes = [
    {
        "name":"commande",
        "component":<CommandProcess id="974"date="17/05/23" products={product_test}/>
    },
    {
        "name":"livraison",
        "component":<DeliveryProcess/>
    },
    {
        "name":"paiement",
        "component":<PaymentProcess/>
    }
];
const PaymentPage = ({location}) => {
    const [step,setStep] = useState(0);
    const [products, setProducts] = useState(location.state.checkout)
    console.log("location ", location);
    console.log("state ",products)
    function changeStep(step){
        if(step < processes.length && step >= 0){
            setStep(step)
        }
    }
    return (
    <div>
        <h1>Paiement</h1>
        <div className="payment_process">
            <div className="stepSwitcher" style={{display:"flex",width:"100%",justifyContent:"space-around"}}>
                {processes.map((process,i) => (
                    <div key={i} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <h2>{i+1} - {processes[i].name}</h2>
                        <div className="bullet" style={{backgroundColor : i === step ? "red" : ""}}></div>
                    </div>
                ))}
            </div>
            <div style={{width:300, margin:" 4em auto", boxShadow:"1px 1px 4px grey", padding:"2em"}}>
                <PaymentProvider>
                    <PaymentSwitcher step={processes[step].name} products={products}/>
                    <button onClick={()=>changeStep(step-1)}>Précédent</button>
                    <button onClick={()=>changeStep(step+1)}>Confirmer</button>
                </PaymentProvider>
            </div>
            
        </div>
    </div>
    )
}

export default PaymentPage;

export const Head = () => <title>Paiement</title>