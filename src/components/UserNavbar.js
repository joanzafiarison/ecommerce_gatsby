import React from "react"; 
import {Link} from "gatsby";

const UserNavBar = () => {
    return (
        <nav>
            <span>You are not logged in</span>

            <Link to="/">Home</Link>
            {` `}
            <Link to="/app/profile">Profile</Link>
            {` `}
            <Link to="/app/login">Login</Link>
            {` `}
            <Link to="/app/command">Suivi des commandes</Link>
            {` `}
            <Link to="/">Logout</Link>
        </nav>
    )
}

export default UserNavBar;