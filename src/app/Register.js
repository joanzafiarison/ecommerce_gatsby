import React , { useState , useEffect} from 'react';
import { createUser } from "../services/auth.js";

const Register = () => {

  const [userData, setUserData] = useState({});
  console.log(userData)

  function handleValidation(e) {
    e.preventDefault();
    console.log("datéa saved", userData)
    createUser(userData)
    //création de l'user
  }       

  function handleChange(e){
    const { value , name } = e.target; 
    setUserData({...userData, [name] : value})
  }


  return (
    <div style={{ display :"flex", flexDirection :"column", justifyContent : "center", alignItems : "center" , margin :"5% 2%"}}>
        <h1>Création de compte</h1>
        <form onSubmit={handleValidation} style={{ padding : "2%", width :"30%"}}>
            <p> Email :
                <input type="text" name="email" onChange={(e) => handleChange(e)}/>
            </p>
            <p> Pseudo :
                <input type="text" name="pseudo"  onChange={(e) => handleChange(e)}/>
            </p>
            <p> Mot de passe :
                <input type="password" name="password"  onChange={(e) => handleChange(e)}/>
            </p>
            <p> Mot de passe confirmation :
                <input type="password" name="password_2"  onChange={(e) => handleChange(e)}/>
            </p>
            <p> Addresse de livraison :
                <input type="text" name="address"  onChange={(e) => handleChange(e)}/>
            </p>
            <p> Postal :
                <input type="text" name="postal"  onChange={(e) => handleChange(e)}/>
            </p>
            <p> Tel :
                <input type="text" name="tel"  onChange={(e) => handleChange(e)}/>
            </p>
            <input type="submit" value="Créer"/>
        </form>
    </div>
  )
}

export default Register