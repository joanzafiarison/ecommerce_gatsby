import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";
import {Link} from "gatsby";
import { checkout_context } from "../services/context";
import Contexted from "../components/CheckoutContent.js";
import cart_img from "../images/cart.png";

const Checkout = () =>{
    const [checkout, overlay, setOverlay] = useContext(checkout_context);
    return <div className="checkout">  
        <div style={{display:"block",backgroundColor:"#1B1A20",position:"fixed",height :overlay? "100%":"auto",right:0,top:0,width: overlay? 450 :"auto",color:"white"}}>
        <figure onClick={()=>setOverlay(!overlay)} style={{margin : 0, padding :"0.2em"}}><img src={cart_img} alt="cart"/></figure>
        <div style={{display:overlay? "flex":"none",margin:"auto",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
            <figure className="checkout_image_open" style={{ backgroundImage:`url(${cart_img})`}}>
                <div className="bubble">{checkout.length}</div>
            </figure>
            <p>Panier</p>
            <div style={{overflow:"hidden", height:"100%", width:"100%"}}>
                <Contexted/>
            </div>
            <div style={{backgroundColor:"#1B1A20", bottom :0, right:0, position:"absolute",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"5px"}}>
                <div>
                    <p>Sous total</p>
                    <p> {checkout.map(el=>el.price).reduce((acc, current)=> parseInt(acc) + parseInt(current), 0)}$</p>
                </div>
                <button><Link to="/app/payment">Commander</Link></button>
            </div>
        </div>
        </div>
    </div>
}

export default Checkout;