import React from "react";
import Layout from "../components/Layout";



const About = () => {
    return(
        <Layout>
            <div style={{position:"relative", height:"80vh",width:"80%"}}>
                <h1>A propos</h1>
                <p>Je m'appelle Joan et je suis le fondateur de Killer Moves, j'aime porter des vêtement qui me ressemble et c'est pourquoi j'ai créer cette marque</p>
                <p>Killer Moves est une marque qui promeut le sport et l'aventure.
                    Le dépassement de soi et la découverte obéissent aux mêmes règles, c'est ce que veut incarner Killer Moves. L'amour du geste, et le désir de se dépasser.
                </p>
                <figure style={{position:"absolute", top:0, left:"50%",width:100, height:300, backgroundColor:"green", zIndex:-1}}>
                    <img alt="jo"/> 
                </figure>
            </div>
        </Layout>
    )
}

export default About;