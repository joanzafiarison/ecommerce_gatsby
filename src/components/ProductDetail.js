import React , {useState,  useContext } from 'react'
import { checkout_context } from "../services/context";


const sizes = ["XS","S","M","L","XL"];
function ProductDetail() {
  const { productDetail , setProductDetail, checkout, setCheckout } = useContext(checkout_context);
  const [ size, setSize ] = useState("M");
  const [quantity, setQuantity ] = useState(1);

  function addProduct() {
    //Product with same size and id found ... update
    // else add
    let newProductIndex = checkout.findIndex( el => el.name == productDetail.name && el.size == size);
    if( newProductIndex != -1) {
        let newCheckout = [...checkout]
        newCheckout[newProductIndex].quantity= quantity; 
        console.log("item to updata ", newCheckout[newProductIndex].size)
        setCheckout(newCheckout)
       

    }
    else {
        setCheckout([...checkout, {...productDetail, quantity : quantity, size : size}])
    }

}
  return (
        <div style={{ zIndex :"15", height :"28rem", boxShadow: "grey 1px 1px 3px",position: 'fixed', display: 'flex', flexDirection: 'column', alignItems: 'center', top: '10%', left: '20%', zIndex: 15, backgroundColor: 'white', padding: 28 , overflowY : "scroll"}}>
            <button  style={{height :20, border :"none",alignSelf:"end"}} onClick={ () => setProductDetail({}) }>X</button>
            <div style={{display :"flex", justifyContent :"space-around"}}>
                <div>
                    <figure style={{minHeight : 400,maxWidth:400, backgroundColor :"grey"}}>
                        <img src={productDetail.images[0]} style={{width:"100%",height :"100%", backgroundColor:"grey"}} />
                    </figure>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <figure style={{width:100, height :100}}>
                            <img src="" style={{width:"100%", height:"100%", backgroundColor:"grey"}} />
                        </figure>
                        <figure style={{width:100, height:100}}>
                            <img src="" style={{width:"100%", height:"100%", backgroundColor:"grey"}} />
                        </figure>
                    </div>
                </div>
                <div>
                    <h2 style={{fontSize :40, margin :0}}>{productDetail.name}</h2>
                    <p style={{fontSize :11, color :"red"}}>{productDetail.price} $</p>
                    <p>Tailles </p>
                    <div style={{display:"flex"}}>
                        {sizes.map( (sz) => (
                            <button key={sz} style={{margin :5, border :"none", borderRadius : 5, backgroundColor : size === sz ? "transparent" :"black", color : size === sz ? "black" :"white"}} onClick={ () => setSize(sz)}>{sz}</button>
                        ))}
                    </div>
                    <p>Quantité</p>
                    <div style={{display:"flex", justifyContent :"space-around", alignItems :"center", border :"1px solid black", padding :5, width :100}}>
                        <button style={{border :"none", height :25,  backgroundColor :"transparent"}} onClick={ () => setQuantity(quantity - 1)}>-</button>
                        <p style={{ margin :0,}}>{quantity}</p>
                        <button style={{border :"none", height :25, backgroundColor :"transparent"}} onClick={ () => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <button style={{margin :10}} onClick={() => addProduct()}>Ajouter au panier</button>
                    <p>{productDetail.desc}</p>
                    
                </div>
                
            </div>
            <h2>Produits similaires</h2>
            <div style={{ display :"flex", justifyContent :"space-around" , width :500,  height : 100}}>           
                <div className="product">
                    <figure className="image_card" style={{ width :80, height :80, backgroundColor :"red"}}>
                            <img src="" style={{width:"100%", height:"100%"}}/>
                    </figure>
                    <p>T shirt ajusté de combat</p>
                    <p>50 $</p>
                </div>
                <div className="product">
                    <figure className="image_card" style={{ width :80, height :80, backgroundColor :"red"}}>
                            <img src="" style={{width:"100%", height:"100%"}}/>
                    </figure>
                    <p>T shirt ajusté de combat</p>
                    <p>50 $</p>
                </div>
                <div className="product">
                    <figure className="image_card" style={{ width :80, height :80, backgroundColor :"red"}}>
                            <img src="" style={{width:"100%", height:"100%"}}/>
                    </figure>
                    <p>T shirt ajusté de combat</p>
                    <p>50 $</p>
                </div>
            </div> 
            <h2>Produits Associés</h2>
            <div style={{ display :"flex", justifyContent :"space-around" , width :500,  height : 100}}>           
                <div className="product">
                    <figure className="image_card" style={{ width :80, height :80, backgroundColor :"red"}}>
                            <img src="" style={{width:"100%", height:"100%"}}/>
                    </figure>
                    <p>T shirt ajusté de combat</p>
                    <p>50 $</p>
                </div>
                <div className="product">
                    <figure className="image_card" style={{ width :80, height :80, backgroundColor :"red"}}>
                            <img src="" style={{width:"100%", height:"100%"}}/>
                    </figure>
                    <p>T shirt ajusté de combat</p>
                    <p>50 $</p>
                </div>
                <div className="product">
                    <figure className="image_card" style={{ width :80, height :80, backgroundColor :"red"}}>
                            <img src="" style={{width:"100%", height:"100%"}}/>
                    </figure>
                    <p>T shirt ajusté de combat</p>
                    <p>50 $</p>
                </div>
            </div>
        </div>
  )
}

export default ProductDetail