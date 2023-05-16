import React , {useState} from "react"; 
import {getUser} from "../services/auth.js";


const ProfilePage = () => {
    // récupération des infos
    const [userData, setUserData] = useState(getUser());
    console.log("profile data",userData)
    return(
        <div>
            <h1>Information sur l'utilisateur </h1>
            <div>
                <p>Identifiants : {userData.username}</p>
            </div>
            <div>  
                <p>Email : {userData.email}</p>
            </div> 
            <button>Changer le mot de passe</button>
        </div>
    )
}

export default ProfilePage;