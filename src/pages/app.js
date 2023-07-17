import React from "react";
import {Router} from "@reach/router";
import {StaticRouter} from "react-router";
import Layout from "../components/Layout.js";
import Home from "../app/Home.js";
import Profile from "../app/Profile.js";
import Login from "../app/Login.js";
import Command from "../app/Command.js";
import Payment from "../app/Payment.js";
import PaymentSuccess from "../app/PaymentSuccess.js"; 
import PaymentFailed from "../app/PaymentFailed.js"; 
import PrivateRoute from "../components/PrivateRoute.js";
import {checkout_context, CheckoutProvider} from '../services/context.js';



  
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
            <PaymentSuccess path="/app/payment/success"/>
            <PaymentFailed path="/app/payment/failed"/>
          </Router>
        </Layout>
      </CheckoutProvider>
    )
  }
  //
  export default App;
  
  //export const Head = () => <title>Baggart</title>