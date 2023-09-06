import React , {useState,  useContext } from 'react'
import { checkout_context } from "../services/context";


const sizes = ["XS","S","M","L","XL"];
function ProductDetail() {
  const { productDetail , setProductDetail} = useContext(checkout_context);
  const [ size, setSize ] = useState("M");
  const [quantity, setQuantity ] = useState(1);
  return (
        <div style={{ zIndex :"15", boxShadow : "1px 1px 3px grey", width: "56%", boxShadow: "grey 1px 1px 3px",position: 'fixed', display: 'flex', flexDirection: 'column', alignItems: 'center', top: '5%', left: '20%', zIndex: 15, backgroundColor: 'white', padding: 28 }}>
            <button  style={{height :20, border :"none",alignSelf:"end"}} onClick={ () => setProductDetail({}) }>X</button>
            <div style={{display :"flex", justifyContent :"space-around"}}>
                <div>
                    <figure style={{maxWidth:400}}>
                        <img src={productDetail.images[0]} style={{width:"100%", backgroundColor:"grey"}} />
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
                    <h2 style={{fontSize :40}}>{productDetail.name}</h2>
                    <p>{productDetail.price} $</p>
                    <p>Tailles </p>
                    <div style={{display:"flex"}}>
                        {sizes.map( (sz) => (
                            <button key={sz} style={{margin :5, backgroundColor : size === sz ? "transparent" :"black", color : size === sz ? "black" :"white"}} onClick={ () => setSize(sz)}>{sz}</button>
                        ))}
                    </div>
                    <p>Quantité</p>
                    <div style={{display:"flex", justifyContent :"space-around", border :"1px solid black"}}>
                        <button style={{border :"none", backgroundColor :"transparent"}} onClick={ () => setQuantity(quantity - 1)}>-</button>
                        <p>{quantity}</p>
                        <button style={{border :"none", backgroundColor :"transparent"}} onClick={ () => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <button>Ajouter au panier</button>
                    <p>{productDetail.desc}</p>
                </div>
                
            </div>

            
            
           
        </div>
  )
}

export default ProductDetail