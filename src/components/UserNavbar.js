import React from "react"; 
import {Link} from "gatsby";

const UserNavBar = () => {
    return (
        <nav>
            <span>You are not logged in</span>
            
            <Link to="/">Home</Link>
            {` `}
            <Link to="/">Profile</Link>
            {` `}
            <Link to="/">Logout</Link>
        </nav>
    )
}

export default UserNavBar;