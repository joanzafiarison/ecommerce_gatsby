import React from "react";
import {Router} from "@reach/router";
import Layout from "../components/Layout.js";
import Home from "../app/Home.js";
import Profile from "../app/profile.js";
import Login from "../app/login.js";
import Command from "../app/Command.js";
import PrivateRoute from "../components/PrivateRoute.js";
import TestPage from "../app/Test.js";

const pageStyles = {
    padding: 96,
    //fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }


const App = () => {

    //lorsque l'on fait checkout_context.Provider value={{checkout, setCheckout}}
    // on set le context
    return (
      
        <main style={{...pageStyles,position:"relative"}}>
            <Layout>
              <Router>
                <Home path="/"/>
                <Login path="/app/login"/>
                <PrivateRoute path="/app/command" component={Command}/>
                <PrivateRoute path="/app/profile" component={Profile}/>
              </Router>
            </Layout>
        </main>
    )
  }
  //
  export default App;
  
  export const Head = () => <title>Baggart</title>