import React, {useState} from "react"; 

let commands = [
    {
        "id":"commande #974",
        "date":"01/06/23",
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
    },
    {
        "id":"commande #974-3",
        "date":"23/06/23",
        "products" : [
            {
                "name":"rashguard Drunken master",
                "price":50.5,
                "quantity":1
            },
            {
                "name":"sweat Dragon Fist" ,
                "price":50.99,
                "quantity":2
            },
            {
                "name":"casquette Killer Moves",
                "price":35.5,
                "quantity":1
            },
        ]
    }
]

const CommandPage = () => {
    // Récupératiion des infos
    const [currentCommand, setCurrentCommand] = useState(-1)
    return(
        <div style={{minHeight: 600}}>
            <h1>Commandes</h1>
            {
                commands.map((product,i) => (
                    <div className = "product_" key={i} style={{margin:"3em"}}>
                        <div style={{display : "flex",justifyContent:"space-around"}}>
                            <p>{product.id}</p>
                            <p>{product.date}</p>
                            <button 
                                onClick={()=>{
                                    if(i === currentCommand){
                                        setCurrentCommand(-1)
                                    }
                                    else{
                                        setCurrentCommand(i)
                                    }    
                                }}>
                                    Details
                            </button>
                        </div>
                        {currentCommand === i && product.products.map((prd,k)=> (
                            <div className="item" key={k} style={{width:"50%"}}>
                                <div className="item_image">
                                </div>
                                <p>{prd.price} $</p>
                                <div className="meta">
                                    <p className="meta_title">{prd.name}</p>
                                    <p className="meta_detail">S | Marque</p>
                                    <p className="meta_detail">X {prd.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default CommandPage;