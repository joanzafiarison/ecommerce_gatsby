import React , { useState, useEffect, useContext } from 'react'
import {checkout_context} from "../services/context";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const {overlayMessage, setOverlayMessage}= useContext(checkout_context); 

  function handleEmail(e){
    e.preventDefault();
    let headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    }

    let data = {
      "email" : email
    };

    const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(emailRegex.test(email))
    axios.post("https://serverless-server.vercel.app/api/add-contact", data , {
      headers : headers
    })
         .then(() =>  {
          //SUCESS Overlay
            setOverlayMessage( "Email Validé");
         })
         .catch((err) => {
          console.log("err", err)
          //ERR Overlay
          setOverlayMessage("email not delivered");
         })
    
  }

  

  return (
    <div style={{ display:"flex", position:"relative",flexDirection:"column",alignItems:"center",backgroundColor:"rgb(52 213 106)", width:"100%", margin:0, padding:"1.5rem 0"}}>
        <h2 style={{margin: "0px 10px 8px", fontSize:18, textAlign : "center", color:"white"}}>Restez au courant du move !</h2>
        <form id="contact"  onSubmit={handleEmail}>
            <p style={{margin:0, borderRight:"1px solid white"}}><input type="text" name="from" placeholder='votre adresse e-mail' style={{backgroundColor:"transparent"}} onChange={(e) => setEmail(e.target.value)}/></p>
            <p style={{margin:0}}><input type="submit" value="C'est parti" style={{border :"none", backgroundColor: "transparent", color: 'white'}}/></p>
        </form>
    </div>
  )
}

export default Contact