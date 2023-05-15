export const isBrowser = () => typeof window !== "undefined";

//Récupère l'user si window est défini et l'item gatsby user est défini
export const getUser = () => 
    isBrowser() && window.localStorage.getItem("gatsbyUser") 
        ? JSON.parse(window.localStorage.getItem("gatsbyUser")) 
        :  {}

const setUser = user => 
    window.localStorage.setItem("gatsbyUser",JSON.stringify(user)); 

export const HandleLogin = ({user, pass , email}) => {
    //check si l'user existe avec un backend 
    //si oui on écrit dans le localstorage
    // on pourrait checker si des cookies ou autre on déjà été définis
    // Oauth2.0 => access token + user 
    if(user === "Joan" && pass == "mdpIncroyable"){
        return setUser({
            user : user,
            pass : pass,
            email : email,
        })
    }
    return false;
}

export const isLoggedIn = () => {
    const user = getUser();

    return !!user.username;
}


//vide les données et renvoie un callback
export const logout = callback => {
    setUser({});
    callback()

}