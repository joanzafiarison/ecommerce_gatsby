import React , {useState} from "react"; 
import {Link} from "gatsby";
import  drunken_rock_lee  from "../images/illus/drunken_rock_lee_tshirt.jpg";
import drunken from "../images/illus/drunken.jpg";
import nakmuay from "../images/illus/nakmuay.webp";
import piedbouche from "../images/illus/piedbouche.jpg";
import superstrike from "../images/illus/superstrike.webp";
import jab from "../images/illus/Hearns.jpg";
import sniper from "../images/illus/sniper3.jpg";
import example from "../images/illus/example.avif";
import kung_fu from "../images/illus/kungfu_tiger.jpg";


const grid_images = [
    {
        "color" : "yellow",
        "img" : drunken
    },
    {
        "color" : "red",
        "img" : piedbouche
    },
    {
        "color" : "blue",
        "img" : superstrike
    },
    {
        "color" : "green",
        "img" : drunken_rock_lee,
    },
    {
        "color" : "blue",
        "img" : jab,
    },
    {
        "color" : "brown",
        "img" : example,
    },
    {
        "color" : "green",
        "img" : sniper,
    },
    {
        "color" : "yellow",
        "img" : kung_fu
    },
    {
        "color" : "cyan",
        "img" : nakmuay,
    }
]

const Footer = () => {
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
                    </ul>
                </div>
            </div>
            <div style={{display : "flex", justifyContent :"center", margin : "5rem auto", flexDirection: "column", alignItems : "center"}}>
                <h1>Réseaux sociaux</h1>
                <div id="grid_reseaux">
                    {grid_images.map(el =>(
                        <figure style={{ backgroundColor: el.color, margin : "0px" }}>
                            <img src={el.img} style={{width:"100%", height:"100%"}}/>
                        </figure>
                    ))}
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;