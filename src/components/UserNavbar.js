import React, {useState} from "react"; 
import {Link, navigate} from "gatsby";
import { isLoggedIn, logout, getUser } from "../services/auth";

const UserNavBar = () => {
    const [user, setUser] = useState(getUser());
    function logout_process (){
        navigate("/app/login");
    }
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/app/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/app/command">Suivi des commandes</Link>
                </li>
                {!isLoggedIn() ? 
                    <li>
                        <Link to="/app/login">Login</Link>
                    </li>
                    : 
                    <div>
                        <button onClick={()=>{logout(logout_process)}}>Logout</button>
                        <p>{`You are logged as ${user.username}`}</p>
                    </div>
                }
            </ul>



            
            
        </nav>
    )
}

export default UserNavBar;