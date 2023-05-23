import React, {useContext} from "react";
import Layout from "../components/Layout";

const News = () => {
    
    return(
        <Layout>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"2em", boxShadow:"2px 1px 4px grey"}}>
                <h1>Annonce</h1>
                <div className="anouncement" style={{width:"60%",margin: "0.5em"}}>
                    <h2>La boutique, sors une nouvelle collection de t shirts</h2>
                    <p>Découvrez la nouvelle collection de t shirt Kung Fu , représentant chaque animal emblématique du kung fu</p>
                    <figure style={{width : 300, height:400, backgroundColor: "grey", margin: "auto"}}>
                        <img alt="anouncement" style={{width:"100%"}}/>
                    </figure>
                    <button style={{margin : "auto"}}>Voir la collection</button>
                </div>
            </div>
        </Layout>
    )
}

export default News;