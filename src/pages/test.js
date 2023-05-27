import React from "react";
import Layout from "../components/Layout";
import {Router} from "@reach/router";
import { CheckoutProvider } from "../services/context";
import Test_Comp from "../components/Test_Comp";
import Home from "../app/Home";



const TestRouter = () => {
    return(
        <CheckoutProvider>
            <Layout>
                <Router>
                    <Home path="/"/>
                    <Test_Comp path="/test"/>
                </Router>
            </Layout>
        </CheckoutProvider>
    )
}

export default TestRouter;