import React from "react";
import Layout from "../components/Layout.js";



const Contact = () => {
    return(
        <Layout>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h1>Contact</h1>
                <p>Un avis, un problème ? contactez nous ici</p>
                <form style={{width:400, padding: "1em"}}>
                    <label>
                        Email : 
                        <input type="text" name="email"/>
                    </label>
                    <label>
                        Objet : 
                        <input type="text" name="object"/>
                    </label>
                    <label>
                        Message : 
                        <input type="textarea" name="message"/>
                    </label>
                </form>
            </div>
        </Layout>
    )
}

export default Contact;