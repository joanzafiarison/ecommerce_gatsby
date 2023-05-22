import React, {useState} from "react";

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

export default PaymentProcess;