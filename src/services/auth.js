const api_host = "";

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
    //si oui on écrit dans le localstorage username, email et le token
    const init = {
        method : "POST",
        body : JSON.stringify({
            email : userData.email,
            password : userData.password,
            username : userData.username
        })
    }
    fetch("https://serverless-server.vercel.app/api/login", init)
        .then((res) => {
            console.log("res login ,", res)
            const user = res.data;
            if(user.length === 1) {
                return setUser({
                    username : user[0].username,
                    email : user[0].email,
                    token : user[0].token
                })
            }
        })
        .catch ((err) => console.log("err ,", err))

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
    // create User envoie d'email, username et password
    const init = {
        method : "POST",
        body : {
            email : user.email,
            password : user.password,
            username : user.username
        }
    }
    /*
    fetch("https://serverless-server.vercel.app/api/register", init)
        .then((res) => {
            console.log("resultat inscription ",res) //resultat
        })
        .catch((err) => {
            console.log("err ",err) // erreur
        })*/

    return {}
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
    // récupérer user.token, user.username
    // accéder à la route avec le token 
    // besoin d'un callBack
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



export const handleFacebookLogin = () => {
    /*
    window.FB.getLoginStatus(function(response) {
        console.log("loginStatis", response)
        if (response.status === 'connected') {
            console.log("connected")
          // the user is logged in and has authenticated your
          // app, and response.authResponse supplies
          // the user's ID, a valid access token, a signed
          // request, and the time the access token 
          // and signed request each expire
          var uid = response.authResponse.userID;
          var accessToken = response.authResponse.accessToken;
        } else if (response.status === 'not_authorized') {
          // the user is logged in to Facebook, 
          console.log("not authorized")
          // but has not authenticated your app
        } else {
          // the user isn't logged in to Facebook.
          console.log("rror")
        }
       });*/
    window.FB.login(function(response) {
        console.log("handler ",response)
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          window.FB.api('/me', function(response) {
            console.log('Good to see you, ' + response.name + '.');
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      }, {scope: 'public_profile,email'});
}