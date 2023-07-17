import React from "react";
import AppRouter from "./app.js";
import TestRouter from "./test.js";


import "../styles/style.scss";

const IndexPage = () => {
  return (
      <main>
          <TestRouter/>
      </main>
  )
}
//<Home/>
// <AppRouter/>
export default IndexPage

export const Head = () => <title>MTJK</title>