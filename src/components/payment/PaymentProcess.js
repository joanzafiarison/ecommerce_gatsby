import React, {useState, useContext} from "react";
import { payment_context } from "../../services/context";
import { process_payment } from "../../services/payment";

const cardTypes = ["visa","mastercard"];

const PaymentProcess = () => {
    const {cardInfo, setCardInfo} = useContext(payment_context);
    console.log("cardInfo ctx ",cardInfo)
    //const [cardInfo, setCardInfo] = useState({});
    function handleValue (e){
        console.log(e.target.value)
        setCardInfo({...cardInfo,[e.target.name]:e.target.value})
        console.log("card info",cardInfo)
    }
    return(
        <div>
            <form>
                <label>
                    Carte : 
                    <select name="cardType" onChange={handleValue}>
                        <option value="visa">Visa</option>
                        <option value="masterCard">MasterCard</option>
                    </select>
                </label>
                <label>
                    Numéro : 
                    <input type="text" name="card_number" onChange={handleValue}/>
                </label>
                <label>
                    Expiration : 
                    <input type="text" name="expiration_date" onChange={handleValue}/>
                </label>
                <label>
                    Code secret : 
                    <input type="text" name="secret_number" onChange={handleValue}/>
                </label>
                < input type="submit" value="valider"/>
            </form>
        </div>
    ) 
}

export default PaymentProcess;