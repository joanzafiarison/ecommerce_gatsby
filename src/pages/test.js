import React from "react";


const TestPage = ({ pageContext: { products } }) => {
    console.log("products",products)
    return(
        <div>
            <h1>TEST</h1>
            <p>...</p>
        </div>
    )
}

export default TestPage;