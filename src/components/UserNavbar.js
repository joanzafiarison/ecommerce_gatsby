import React, {useState, useEffect} from "react"; 
import {Link, navigate} from "gatsby";
import { isLoggedIn, logout, getUser } from "../services/auth";
import icon_profile from "../images/icon_profile.webp"
//0 0 10px #00000012;

const UserNavBar = () => {
    const [user, setUser] = useState(getUser());
    const [isMobile, setMobile] = useState(false)
    const [isOpen, setOpen] = useState(false)
    console.log('open',isOpen)
    function logout_process (){
        navigate("/app/login");
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            if(window.innerWidth < 1200){
                setMobile(true)
            }
            else {
                setMobile(false)
            }
        })

    })

    useEffect(() => {
        if( window.innerWidth < 1200){
            setMobile(true);
        }
        else{
            setMobile(false);
        }
    },[])
    return (
        <nav style={{ position: (isMobile && isOpen) ? "absolute" : "", zIndex : (isMobile && isOpen) ? 10 : 0,  display: "flex", justifyContent: 'center'}}>
            <ul style={{display: (isMobile && !isOpen) ? "none" : "flex", flexDirection: (isMobile && isOpen) ? "column" : "row", position :(isMobile && isOpen) ? "absolute" : "", backgroundColor: (isMobile && isOpen) ?"grey" : "", width : (isMobile && isOpen) ? "100%" : "70%", height:(isMobile && isOpen) ?"100vh" : ""}}>
                <li>
                    <Link to="/app/profile" className="link_size" >Profil</Link>
                </li>
                <li>
                    <Link to="/app/command" className="link_size">Commandes</Link>
                </li>
                <li>
                    <Link to="/news" className="link_size">Media</Link>
                </li>
                {!isLoggedIn() ? 
                    <li>
                        <Link to="/app/login">
                            <img src={icon_profile} style={{width:20}}/>
                        </Link>
                    </li>
                        : 
                    <div>
                        <button onClick={()=>{logout(logout_process)}}><img src={icon_profile} style={{width:20}}/></button>
                        <p style={{fontSize:8}}>{`You are logged as ${user.username}`}</p>
                    </div>
                }
            </ul> 
            <div  className={`icon-one ${isOpen ? 'active-one':''} `} style={{display: isMobile ? "block" : "none"}} onClick={()=>setOpen(!isOpen)}>
                    <div className="hamburger hamburger-one"></div>
            </div>
        </nav>
    )
}

export default UserNavBar;