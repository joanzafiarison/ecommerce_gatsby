import React from "react"; 

let commands = [
    {
        "id":"commande #974",
        "products" : [
            {
                "name":"tshirt",
                "price":23.5,
                "quantity":3
            },
            {
                "name":"sweat",
                "price":50.99,
                "quantity":2
            },
            {
                "name":"casquette",
                "price":12.5,
                "quantity":1
            },
        ]
    }
]

const CommandPage = () => {
    // Récupératiion des infos
    return(
        <div>
            <h1>Commandes</h1>
            {
                commands.map((product,i) => (
                    <div class = "product" key={i}>
                        <p>{product.id}</p>
                        {product.products.map(prd=> (
                            <div class="product_list">
                                <p>{prd.name}</p>
                                <p>{prd.price}</p>
                                <p>{prd.quantity}</p>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default CommandPage;