import React , { useState } from 'react'

const Contact = () => {
  const [email, setEmail] = useState("");

  function handleEmail(e){
    e.preventDefault();
    const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(emailRegex.test(email))
  }
  return (
    <div style={{ display:"flex", flexDirection:"column",alignItems:"center",backgroundColor:"rgb(52 213 106)", width:"100%", margin:0, padding:"1.5rem 0"}}>
        <h2 style={{margin: "0px 10px 8px", fontSize:18, textAlign : "center", color:"white"}}>Restez au courant du move !</h2>
        <form id="contact" method="POST" action="https://serverless-server.vercel.app/api/add-contact" onSubmit={handleEmail}>
            <p style={{margin:0, borderRight:"1px solid white"}}><input type="text" name="from" placeholder='votre adresse e-mail' style={{backgroundColor:"transparent"}} onChange={(e) => setEmail(e.target.value)}/></p>
            <p style={{margin:0}}><input type="submit" value="C'est parti" style={{border :"none", backgroundColor: "transparent", color: 'white'}}/></p>
        </form>
    </div>
  )
}

export default Contact