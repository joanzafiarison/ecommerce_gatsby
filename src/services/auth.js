
const FakeUsers = [
    {
        "username" : "BendoFlex",
        "email" : "joanzaf@lilo.org",
        "password" :"mdp",
        "address" : "174 route des roumains",
        "postal" :67000,
        "country" : "France",
        "tel" : "+33782048552"
    },
    {
        "username" : "Zim",
        "email" : "zim@gmail.com",
        "password" :"mdp",
        "address" : "impasse de la fortune",
        "postal" :59000,
        "country" : "France",
        "tel" : "+3384408508"
    }
]

export const isBrowser = () => typeof window !== "undefined";

//Récupère l'user si window est défini et l'item gatsby user est défini
export const getUser = () => 
    isBrowser() && window.localStorage.getItem("gatsbyUser") 
        ? JSON.parse(window.localStorage.getItem("gatsbyUser")) 
        :  {}

const setUser = user => 
    window.localStorage.setItem("gatsbyUser",JSON.stringify(user)); 

export const HandleLogin = (userData) => {
    //check si l'user existe avec un backend 
    //si oui on écrit dans le localstorage
    // on pourrait checker si des cookies ou autre on déjà été définis
    // Oauth2.0 => access token + user
    const user = FakeUsers.filter((v,k) => v.username === userData.username && v.password === userData.password);
    if(user.length === 1){
        return setUser({
            username : user[0].username,
            password : user[0].password,
            email : user[0].email,
            address : user[0].address,
            postal :user[0]. postal,
            country : user[0].country,
            tel : user[0].tel
        })
    }
    return false;
}

export const createUser = (user) => {
    console.log(user);
    // create User
    return setUser({
        username : user.username,
        password : user.password,
        email : user.email,
        address : user.address,
        postal :user. postal,
        country : user.country,
        tel : user.tel
    })
}
export const handleUpdate = (new_data) => {
    const currentUser = getUser();
    if (currentUser) {
        //controles ici
        setUser(new_data)
    }
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

export const deleteAccount = callback => {
    setUser({});
    callback();
}