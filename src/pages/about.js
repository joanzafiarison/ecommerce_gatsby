import React from "react";
import Layout from "../components/Layout";



const About = () => {
    return(
        <Layout>
            <div style={{position:"relative", height:"80vh",width:"80%", margin :"7rem"}}>
                <h1>A propos</h1>
                <div style={{width : "50%"}}>
                    <p>Je m'appelle Joan et je suis le fondateur de Matanjaka, j'aime porter des vêtement qui me ressemble et c'est pourquoi j'ai créer cette marque</p>
                    <p>Matanjaka est une marque qui promeut le sport et l'aventure.
                        Le dépassement de soi et la découverte obéissent aux mêmes règles, c'est ce que veut incarner Matanjaka. L'amour du geste, et le désir de se dépasser.
                    </p>
                    <p>C'est aussi un clin d'oeil a mon pays Madagascar, Matanjaka voulant dire "fort"</p>
                </div>
                <figure style={{position:"absolute", top:0, left:"50%",width:100, height:300, backgroundColor:"green", zIndex:-1}}>
                    <img alt="jo"/> 
                </figure>
            </div>
        </Layout>
    )
}

export default About;