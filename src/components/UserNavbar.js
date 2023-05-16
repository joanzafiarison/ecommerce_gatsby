import React from "react"; 
import {Link, navigate} from "gatsby";
import { isLoggedIn, logout } from "../services/auth";

const UserNavBar = () => {
    function logout_process (){
        navigate("/app/login");
    }
    return (
        <nav>
            
            <span>{isLoggedIn() ? "You are logged as ":"You are not logged in"}</span>
                
            <Link to="/">Home</Link>
            {` `}
            <Link to="/app/profile">Profile</Link>
            {` `}
            <Link to="/app/login">Login</Link>
            {` `}
            <Link to="/app/command">Suivi des commandes</Link>
            {` `}
            <button onClick={()=>{logout(logout_process)}}>Logout</button>
        </nav>
    )
}

export default UserNavBar;