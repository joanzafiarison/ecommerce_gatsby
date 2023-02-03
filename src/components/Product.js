import * as React from "react";


const Product = (props) =>{
    return(
    <div>
        <div style={{width:100,height:150,backgroundColor:"grey",border:"1px solid black",margin:30}}>
        </div>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
    )
}


export default Product;