import React , {useEffect }from "react";
import AppRouter from "./app.js";
import TestRouter from "./test.js";


import "../styles/style.scss";

import {initFacebookSdk} from "../services/fb_auth.js";



const IndexPage = () => {
  useEffect(() => {
    console.log("useeffect fb", window.FB)
    initFacebookSdk().then(console.log("start FB login",window.FB));
    
  })
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