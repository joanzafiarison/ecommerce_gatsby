import React , {useEffect }from "react";
import AppRouter from "./app.js";
import TestRouter from "./test.js";


import "../styles/style.scss";

import {initFacebookSdk} from "../services/fb_auth.js";



const IndexPage = () => {
  useEffect(() => {
    console.log("FB auth charged here")
    //initFacebookSdk().then(console.log("start FB login"));
    
  },[])
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