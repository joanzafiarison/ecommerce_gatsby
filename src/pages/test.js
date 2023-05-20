import React from "react";


const TestPage = ({ pageContext: { products } }) => {
    console.log("products",products)
    return(
        <div>
            <h1>TEST</h1>
            <p>{products.result.sync_product.name}</p>
            <figure style={{width:500}}>
                <img alt="product" src={products.result.sync_product.thumbnail_url} style={{width:"100%"}}/>
            </figure>
            <p>{products.result.sync_variants[0].retail_price} $</p>
        </div>
    )
}

export default TestPage;