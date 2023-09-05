import React , { useContext } from 'react'
import { checkout_context } from "../services/checkout";

function ProductDetail() {
  const { productDetail } = useContext(checkout_context);
  return (
    <div style={{margin : "auto", zIndex :"15", maxWidth :500, maxHeight :400, boxShadow : "1px 1px 3px grey", minWidth: "40rem", minHeight: "20rem", boxShadow: "grey 1px 1px 3px",position: 'fixed', display: 'flex', flexDirection: 'column', alignItems: 'center', top: '30%', left: '38%', zIndex: 15, backgroundColor: 'white', padding: 28 }}>
        <h2> {productDetail.name}</h2>
        <div>
            <figure style={{width:400}}>
                <img src={productDetail.images[0]} style={{width:"100%", backgroundColor:"grey"}} />
            </figure>
            <div>
                <figure style={{width:100}}>
                    <img src="" style={{width:"100%", backgroundColor:"grey"}} />
                </figure>
                <figure style={{width:100, height:100}}>
                    <img src="" style={{width:"100%", backgroundColor:"grey"}} />
                </figure>
            </div>
        </div>
        <p>{productDetail.desc}</p>
        <p>{productDetail.price} $</p>
        <p>Tailles :</p>
    </div>
  )
}

export default ProductDetail