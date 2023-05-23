import React, {useContext} from "react";
import {checkout_context} from "../services/context";


const TestPage = ({ pageContext: { data } }) => {
    const ctx = useContext(checkout_context);
    console.log("checkout ",ctx);
    return(
        <div>
            <h1>TEST</h1>
            <p>{data.name}</p>
        </div>
    )
}

export default TestPage;