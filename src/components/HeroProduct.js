import React from "react"; 
import { Link } from "gatsby";


const HeroProduct = ({name, id, img}) => {
    return(
        <div className="hero_product" style={{ backgroundImage : `url(${img})` }}>
                        <div className="hero_title">
                            <h1>{name}</h1>
                            <button><Link to={`/app/product/${id}`}>En savoir plus</Link></button>
                        </div>
        </div>
    )
}

export default HeroProduct;