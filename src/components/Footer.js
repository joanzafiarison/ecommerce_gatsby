import React , {useState} from "react"; 
import {Link} from "gatsby";


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
                        <li>Mentions Légales</li>
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
                <div style={{display:"flex",justifyContent:"space-between", width:"30%"}}>
                    <div style={{width:20, height:20, backgroundColor:"grey"}}></div>
                    <div style={{width:20, height:20, backgroundColor:"grey"}}></div>
                    <div style={{width:20, height:20, backgroundColor:"grey"}}></div>
                    <div style={{width:20, height:20, backgroundColor:"grey"}}></div>
                </div>
            </div>
            <div style={{textAlign:"center"}}>
                <p style={{margin : 0, padding :'0.5rem'}}>développé par <a href="https://baomediamain.gatsbyjs.io/">@Bao Media</a> 2023</p>
            </div>

        </footer>
    )
}

export default Footer;