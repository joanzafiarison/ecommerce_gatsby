import React , {useState} from "react";

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        username : "",
        password : ""
    }); 

    function handleInputChange (e,data) {
        const value = e.target.value;
        setCredentials({...credentials,[data]:value})
        console.log(credentials);

    }
    return (
        <div>
            <form>
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
                <input type="submit" value="Se connecter"/>
            </form>
        </div>
    )
}

export default LoginPage;