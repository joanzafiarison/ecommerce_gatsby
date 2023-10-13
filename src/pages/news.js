import React, {useContext} from "react";
import Layout from "../components/Layout";
import news_img from "../images/mockup.png";

const News = () => {
    
    return(
        <Layout>
            <div className="anouncement_card">
                <h1>Annonce</h1>
                <div className="anouncement" style={{width:"60%",margin: "0.5em"}}>
                    <h2>La boutique, sors une nouvelle collection de t shirts</h2>
                    <p>Découvrez la nouvelle collection de t shirt Kung Fu , représentant chaque animal emblématique du kung fu</p>
                    <figure style={{maxWidth : 300, backgroundColor: "grey", margin: "auto"}}>
                        <img alt="anouncement" src={news_img} style={{width:"100%"}}/>
                    </figure>
                    <button style={{margin : "1rem auto"}}>Voir la collection</button>
                </div>
            </div>
        </Layout>
    )
}

export default News;