import React from "react"; 
import {Link} from "gatsby";


const Footer = () => {
    return(
        <footer>
            <div className="liens">
                <div>
                    <h1>Liens 1</h1>
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
                    <h1>Liens 2</h1>
                    <ul>
                        <li>
                            <Link to='/faq'>FAQ</Link></li>
                        <li>
                            <Link to='/news'>News</Link></li>
                        <li>C</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1>Réseaux sociaux</h1>
            </div>
        </footer>
    )
}

export default Footer;