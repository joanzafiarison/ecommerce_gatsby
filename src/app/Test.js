import React from "react";


const TestPage = ({ pageContext: { data } }) => {
    return(
        <div>
            <h1>TEST</h1>
            <p>{data.name}</p>
        </div>
    )
}

export default TestPage;