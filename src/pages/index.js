import React from "react";
import AppRouter from "./app.js";
import TestRouter from "./test.js";


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
          <TestRouter/>
      </main>
  )
}
//<Home/>
// <AppRouter/>
export default IndexPage

export const Head = () => <title>Killer Moves Shop</title>