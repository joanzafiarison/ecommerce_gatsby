import React from "react";
import {Router} from "@reach/router";
import {StaticRouter} from "react-router";
import Layout from "../components/Layout.js";
import Home from "../app/Home.js";
import Profile from "../app/Profile.js";
import Login from "../app/login.js";
import Command from "../app/Command.js";
import Payment from "../app/Payment.js";
import PrivateRoute from "../components/PrivateRoute.js";
import Test from "../app/Test.js";
import {checkout_context, CheckoutProvider} from '../services/context.js';

const pageStyles = {
    padding: 96,
    //fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }


const App = () => {
  
    /*
    const [overlay,setOverlay] = React.useState(false);
    const [checkout, setCheckout] = React.useState([]);
    const [size,setSize] = React.useState("XS");*/
    //lorsque l'on fait checkout_context.Provider value={{checkout, setCheckout}}
    // on set le context
    return (
     <CheckoutProvider>
        <Layout>
          <Router>
            <Home path="/"/>
            <Login path="/app/login"/>
            <PrivateRoute path="/app/command" component={Command}/>
            <PrivateRoute path="/app/profile" component={Profile}/>
            <Payment path="/app/payment"/>
          </Router>
        </Layout>
      </CheckoutProvider>
    )
  }
  //
  export default App;
  
  //export const Head = () => <title>Baggart</title>