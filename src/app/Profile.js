import React , {useState} from "react"; 
import {getUser} from "../services/auth.js";


const ProfilePage = () => {
    // récupération des infos
    const [userData, setUserData] = useState(getUser());
    const [currentDatas, setCurrentDatas] = useState([]);
    //console.log("profile data",userData)
    function handleSubmit(e){
        e.preventDefault();
    }
    function modifyData(name) {
        let newData = [...currentDatas];
        //console.log(currentDatas.find(name));
        console.log("before ",newData)
        if(currentDatas.findIndex( d => d === name) !== -1){
            newData = currentDatas.filter((v,k) => v !== name)
            console.log("after filter",newData)
            setCurrentDatas(newData)
        }
        else {
            newData.push(name);
            setCurrentDatas(newData);
            console.log("not found",newData);
        }
        
    }
    return(
        <div style={{margin:"3em", display:"flex", flexDirection:"column", alignItems:"center", width:"40%"}}>
            <h1>Information sur l'utilisateur </h1>
            <form onSubmit={handleSubmit}>
                <label> 
                    Identifiants :
                    <input type="text" name="username" value={userData.username} disabled={ currentDatas.indexOf("username") !== -1 ?  "" : "disabled"}/>
                    <button onClick={() => modifyData("username")}>Changer</button>
                </label>
                <label>  
                    Email :
                    <input type="text" name="email" value={userData.email} disabled={currentDatas.indexOf("email") !== -1 ?  "" : "disabled"}/>
                    <button onClick={()=> modifyData("email")}>Changer</button>
                </label>
            </form> 
            <button style={{width:150}}>Changer le mot de passe</button>
        </div>
    )
}

export default ProfilePage;