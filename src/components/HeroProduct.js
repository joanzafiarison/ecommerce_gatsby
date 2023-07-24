import React from "react"; 
import { Link } from "gatsby";


const HeroProduct = ({name, id, img, desc}) => {
    return(
        <div className="hero_product" style={{ backgroundImage : `url(${img})` }}>
                        <div className="hero_title">
                            <h1>{name}</h1>
                            <p>{desc}</p>
                            <button style={{backgroundColor:"white",border:"none", padding:"5px"}}><Link to={`/app/product/${id}`}>Découvrir</Link></button>
                        </div>
        </div>
    )
}

export default HeroProduct;