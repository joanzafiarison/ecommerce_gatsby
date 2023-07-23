import React from "react";
import { Link } from "gatsby";
import UserNavBar from "./UserNavbar"; 



const Header = () => {
    return (
        <>
            <div id="logo">
                <Link to="/"><h1>Matanjaka</h1></Link>
            </div>
            <UserNavBar/>
        </>
    )
}

export default Header;