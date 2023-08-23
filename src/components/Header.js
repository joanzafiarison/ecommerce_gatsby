import React from "react";
import { Link } from "gatsby";
import UserNavBar from "./UserNavbar"; 



const Header = () => {
    return (
        <div style={{display : "flex", alignItems:"center", justifyContent:"space-around", padding:"0.5rem",     position: "fixed" ,top: "0%", zIndex: 5, border: '1px solid white', width: "100%"}}>
              <div id="logo">
                    <Link to="/"><h1>Matanjaka</h1></Link>
                </div>
                <UserNavBar/>
        </div>
    )
}

export default Header;