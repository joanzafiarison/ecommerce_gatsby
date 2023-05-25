import React from "react"; 



const PaymentFailed = () => {
    return(
        <div className="notification" >
            <h1>Purchase Failed</h1>
            <p>Numéro de commande :</p>
            <p>le paiement n'a pas abouti veuillez envoyer un mail <a href="#">ici</a></p>
        </div>
    )
}

export default PaymentFailed;