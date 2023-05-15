import React from "react";
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth";


//Wrapper for private components
//Accessible if logged in,  redirect if not
const PrivateRoute = ({component: Component, location, ...rest}) => {
    if ( !isLoggedIn() && location.pathname !== "/app/login" ) {
        navigate("/app/login");
        return null;
    }
    return <Component {...rest}/>
}

export default PrivateRoute;