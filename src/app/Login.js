import React , {useState, useEffect} from "react";
import { HandleLogin, isLoggedIn } from "../services/auth";
import { navigate } from "gatsby" ;
import LoginButton from "../components/LoginButton";

const LoginPage =  () => {
    const [credentials, setCredentials] = useState({
        username : "",
        password : "",
        email : ""
    }); 

    function handleInputChange (e) {
        const value = e.target.value;
        const name = e.target.name;
        setCredentials({...credentials,[name]:value})
        console.log(credentials);

    }

    function handleSubmit (event) {
        event.preventDefault();
        console.log("submit func")
        HandleLogin(credentials);
        console.log("loggin", isLoggedIn())
        if( isLoggedIn() ){
            console.log("let s go")
            navigate("/app/profile")
        }
    }

    //redirection a profile si connecté
    useEffect(()=>{
        if( isLoggedIn() ){
            navigate('/app/profile')
        }
        else{
            console.log("mauvais identiffiants")
        }
    
    },[])

    return (
        <div className="base_container">
            <form method="post" onSubmit={handleSubmit} style={{padding : "2rem"}}>
                <label>
                    Pseudo  
                    <input 
                        type="text"
                         name="username"
                         onChange={handleInputChange}
                    />
                </label>
                <label>
                    Email : 
                    <input 
                        type="text"
                         name="email"
                         onChange={handleInputChange}
                    />
                </label>
                <label>
                    Mot de passe : 
                    <input 
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                    />
                </label>
                <input  type="submit" value="Se connecter"/>
            </form>
            <button onClick={()=>{navigate("/app/register")}}>Créer un compte</button>
            <LoginButton/>
            
        </div>
    )
}



export default LoginPage;