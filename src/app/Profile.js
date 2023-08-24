import React , {useState, useEffect} from "react"; 
import {getUser} from "../services/auth.js";


const ProfilePage = () => {
    // récupération des infos
    const [userData, setUserData] = useState(getUser());
    const [currentDatas, setCurrentDatas] = useState([]);
    const  [openModification, setOpenModification] = useState(false);
    const [valid, setValid] =useState(false);

    console.log("profile data",userData)
    function handleSubmit(e){
        e.preventDefault();
    }

    function handleChange(e){
        console.log(e.target.name);
        console.log(e.target.value);
        if (userData[e.target.name] !== e.target.value ){
            setUserData({...userData,[e.target.name] : e.target.value})
        }
    }

    function handleValidation() {
        console.log('validation of data');
        //numéro
        //email
        //postal
        //mot de passe
    }

    useEffect(()=>{
        //envoie des nouvelles données? 
        // en attente, attendre c=nf=f nfionfirmation via email
        console.log(userData)
    },[valid])
    return(
        <div className='base_container'>
            <h1>Information sur l'utilisateur </h1>
            <form onSubmit={handleSubmit}>
                <label> 
                    Identifiants :
                    <input type="text" name="username" value={userData.username} disabled={ openModification ?  "" : "disabled"} onChange={(e) => handleChange(e)}/>
                </label>
                <label>  
                    Email :
                    <input type="text" name="email" value={userData.email} disabled={ openModification ?  "" : "disabled"} onChange={(e) => handleChange(e)}/>
                </label>
                <label>  
                    Mot de passe :
                    <input type="password" name="password" value={userData.password} disabled={ openModification ?  "" : "disabled"} onChange={(e) => handleChange(e)}/>
                </label>
                <label>  
                    Adresse :
                    <input type="text" name="adress" value={userData.adress} disabled={ openModification ?  "" : "disabled"} onChange={(e) => handleChange(e)}/>
                </label>
                <label>  
                    Postal:
                    <input type="text" name="postal" value={userData.postal} disabled={ openModification ?  "" : "disabled"} onChange={(e) => handleChange(e)}/>
                </label>
                <label>  
                    Pays :
                    <input type="text" name="country" value={userData.country} disabled={ openModification ?  "" : "disabled"} onChange={(e) => handleChange(e)}/>
                </label>
                <label>  
                    Téléphone :
                    <input type="text" name="phone" value={userData.phone} disabled={ openModification ?  "" : "disabled"} onChange={(e) => handleChange(e)}/>
                </label>
                <button disabled={ openModification ? "" : "disabled"} style={{width:150}} onClick={() => handleValidation()} >Valider</button>
            </form> 
      
            <button style={{width:150}} onClick={()=> setOpenModification(!openModification)}>Modifier les informations</button>

        </div>
    )
}

export default ProfilePage;