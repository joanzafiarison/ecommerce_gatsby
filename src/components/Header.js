import React from "react";
import { Link } from "gatsby";
import UserNavBar from "./UserNavbar"; 



const Header = () => {
    return (
        <div style={{display : "flex", alignItems:"center", justifyContent:"space-around", padding:"0.5rem"}}>
              <div id="logo">
                    <Link to="/"><h1>Matanjaka</h1></Link>
                </div>
                <UserNavBar/>
        </div>
    )
}

export default Header;