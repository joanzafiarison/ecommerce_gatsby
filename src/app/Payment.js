import React, {useState, useContext} from "react";
import { checkout_context } from "../services/context";



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

const relay = [
    {
        "name":"point relais",
        "lat":76.55,
        "lng":173.55
    },
    {
        "name":"point relais",
        "lat":76.55,
        "lng":173.55
    }
]


const CommandProcess = ({date, products, id}) => {
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
            <p>Total : {products.map(el=>el.price * el.quantity).reduce((acc, value)=> acc + value)} $</p>
        </div>
    )
}

const CheckoutProcess = () => {
    return(
        <div>
            <form>
                <label>
                    Adresse : 
                    <input type="text" name="adress"/>
                </label>
                <label>
                    Code Postal : 
                    <input type="text" name="postal"/>
                </label>
                <label>
                    Ville : 
                    <input type="text" name="city"/>
                </label>
                <label>
                    Point : 
                    <select>
                        {relay.map(pt => (
                            <option value={pt.name}>{pt.name}</option>
                        ))

                        }
                    </select>
                </label>
            </form>
        </div>
    )
}


const PaymentProcess = () => {
    return(
        <div>
            <form>
                <label>
                    Carte : 
                    <select>
                        <option value="visa">Visa</option>
                        <option value="masterCard">MasterCard</option>
                    </select>
                </label>
                <label>
                    Numéro : 
                    <input type="text" name="number"/>
                </label>
                <label>
                    Expiration : 
                    <input type="text" name="number"/>
                </label>
                <label>
                    Code secret : 
                    <input type="text" name="number"/>
                </label>
            </form>
        </div>
    )
}

const processes = [
    {
        "name":"commande",
        "component":<CommandProcess id="974"date="17/05/23" products={product_test}/>
    },
    {
        "name":"livraison",
        "component":<CheckoutProcess/>
    },
    {
        "name":"paiement",
        "component":<PaymentProcess/>
    }
];
const PaymentPage = () => {
    const [step,setStep] = useState(0);
    const [deliveryInfo, setDeliveryInfo] = useState({})
    const [checkoutContent, setCheckoutContent] = useState({})
    const [cardInfo, setCardInfo] = useState({})
    const ctx= useContext(checkout_context);
    console.log("context checkout",ctx)
    console.log(deliveryInfo,checkoutContent,cardInfo)
    function changeStep(step){
        if(step < processes.length && step >= 0){
            setStep(step)
        }
    }
    return <div>
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
                {processes[step].component}
                <button onClick={()=>changeStep(step-1)}>Précédent</button>
                <button onClick={()=>changeStep(step+1)}>Confirmer</button>
            </div>
            
        </div>
    </div>
}

export default PaymentPage;

export const Head = () => <title>Paiement</title>