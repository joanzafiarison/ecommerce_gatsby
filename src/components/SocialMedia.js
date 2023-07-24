import React from 'react'
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

const SocialMedia = () => {
  return (
    <div style={{display : "flex", justifyContent :"center", margin : "5rem auto", flexDirection: "column", alignItems : "center"}}>
        <h1>Instagram</h1>
        <p>Suivez nous sur les réseaux sociaux</p>
        <div id="grid_reseaux">
            {grid_images.map(el =>(
                <figure style={{ backgroundColor: el.color, margin : "0px" }}>
                    <img src={el.img} style={{width:"100%", height:"100%"}}/>
                </figure>
            ))}
            
        </div>
    </div>
  )
}

export default SocialMedia