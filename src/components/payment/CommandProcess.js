import React from "react";

const CommandProcess = ({products}) => {
    const date = new Date().toDateString();//.now().toString()
    const id = Math.round(Math.random()*1000)
    console.log("products ",products);
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
        </div>
    )
}

export default CommandProcess;