import React from "react";
import Layout from "../components/Layout.js";
import Home from "../app/Home.js";


import "../styles/style.scss";



const pageStyles = {
  padding: 30,
  //fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {

  //lorsque l'on fait checkout_context.Provider value={{checkout, setCheckout}}
  // on set le context
  return (
    
      <main style={{...pageStyles}}>
          <Layout>
            <Home/>
          </Layout>
      </main>
  )
}
//
export default IndexPage

export const Head = () => <title>Killer Moves Shop</title>