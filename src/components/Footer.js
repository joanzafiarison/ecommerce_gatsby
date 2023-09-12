import React , {useState} from "react"; 
import {Link} from "gatsby";
import twitter from "../images/icons/twitch.png";
import fb from "../images/icons/fb.webp";
import instagram from "../images/icons/instagram.png";
import tiktok from "../images/icons/tiktok.png";



const Footer = () => {
    return(
        <footer>
            <div className="liens">
                <div>
                    <h1>En savoir plus</h1>
                    <ul  style={{padding:0}}>
                        <li>
                            <Link to="/contact">Nous Contacter</Link>
                        </li>
                        <li>
                            <Link to="/about">A propos</Link>
                        </li>
                        <li>
                            <Link to="/mentionslegales">Mentions Légales</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Question</h1>
                    <ul style={{padding:0}}>
                        <li>
                            <Link to='/faq'>FAQ</Link></li>
                        <li>
                            <Link to='/news'>News</Link></li>
                    </ul>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", border:"1px solid black", borderWidth :"1px 0px 1px 0px",padding:"4rem 1rem 4rem"}}>
                <h2>Matanjaka</h2>
                <div className="network">
                    <div className="network__part">
                        <img src={instagram}/>
                    </div>
                    <div className="network__part">
                        <img src={twitter}/>
                    </div>
                    <div className="network__part">
                        <img src={tiktok}/>   
                    </div>
                    <div className="network__part">
                        <img src={fb}/>
                    </div>
                </div>
            </div>
            <div style={{textAlign:"center"}}>
                <p style={{margin : 0, padding :'0.5rem'}}>développé par <a href="https://baomediamain.gatsbyjs.io/">@Bao Media</a> 2023</p>
            </div>

        </footer>
    )
}

export default Footer;