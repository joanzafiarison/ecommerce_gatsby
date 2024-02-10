import React from "react";
import Layout from "../components/Layout";
import jo from "../images/jo_mdr.png";



const About = () => {
    return(
        <Layout>
            <div className="about_container" style={{position:"relative", height:"80vh", margin :"7rem"}}>
                <div className="about_card">
                    <h1 style ={{color : "#44BE34"}}>A propos</h1>
                    <div style={{width : "40%", boxShadow:"1px 1px 2px grey", padding : "0.5rem"}}>
                        <p>Je m'appelle Joan et je suis le fondateur de Matanjaka, j'aime porter des vêtement qui me ressemble et c'est pourquoi j'ai créer cette marque</p>
                        <p>Matanjaka est une marque qui promeut le sport et l'aventure.
                            Le dépassement de soi et la découverte obéissent aux mêmes règles, c'est ce que veut incarner Matanjaka. L'amour du geste, et le désir de se dépasser.
                        </p>
                        <p>C'est aussi un clin d'oeil a mon pays Madagascar, Matanjaka voulant dire "fort"</p>
                    </div>
                </div>
                <figure style={{position:"absolute", top:2, left:"50%",width:100, height:300, zIndex:5}}>
                    <img alt="jo" src={jo} style={{width:200}}/> 
                </figure>
            </div>
        </Layout>
    )
}

export default About;