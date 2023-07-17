import React , {useState, useEffect} from "react"; 
import {Link} from "gatsby";
import axios from "axios";

const grid_images = [
    {
        "color" : "yellow",
        "img" : ""
    },
    {
        "color" : "red",
        "img" : ""
    },
    {
        "color" : "blue",
        "img" : ""
    },
    {
        "color" : "green",
        "img" : "",
    },
    {
        "color" : "blue",
        "img" : "",
    },
    {
        "color" : "brown",
        "img" : "",
    },
    {
        "color" : "green",
        "img" : "",
    },
    {
        "color" : "yellow",
        "img" : "",
    },
    {
        "color" : "cyan",
        "img" : "",
    }
]

const Footer = () => {
    useEffect (()=>{
        axios.get("https://graph.facebook.com/v3.2/17841405309211844?fields=business_discovery.username(bluebottle){followers_count,media_count}&access_token={access-token}")
             .then(console.log)
             .catch(console.log)
    },[])
    return(
        <footer>
            <div className="liens">
                <div>
                    <h1>En savoir plus</h1>
                    <ul>
                        <li>
                            <Link to="/contact">Nous Contacter</Link>
                        </li>
                        <li>
                            <Link to="/about">A propos</Link>
                        </li>
                        <li>Mentions Légales</li>
                    </ul>
                </div>
                <div>
                    <h1>Question</h1>
                    <ul>
                        <li>
                            <Link to='/faq'>FAQ</Link></li>
                        <li>
                            <Link to='/news'>News</Link></li>
                        <li>C</li>
                    </ul>
                </div>
            </div>
            <div style={{display : "flex", justifyContent :"center", margin : "1rem", flexDirection: "column", alignItems : "center"}}>
                <h1>Réseaux sociaux</h1>
                <div id="grid_reseaux">
                    {grid_images.map(el =>(
                        <figure style={{ backgroundColor: el.color, width : "100%", margin : "0px" }}>
                            <img src=""/>
                        </figure>
                    ))}
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;