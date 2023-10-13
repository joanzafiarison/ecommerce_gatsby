import React , {useState, useEffect} from "react";


export default function GraphExemple ({search}) {
    const [searchRes, setSearchRes] = useState([])
    console.log("res src ",searchRes)
    console.log("props srch", search)

    useEffect( () => {
      console.log("in useEffect search ",search)
      const mockup = {
        "mma" : [
            {
                name : "rashguard",
                unit_amount : 37,
                images : [""]
            },
            {
                name : "rashguard_2",
                unit_amount : 48,
                images : [""]
            },
        ],
        "sweat" : [
            {
                name : "sweat_1",
                unit_amount : 37,
                images : [""]
            },
            {
                name : "sweat2",
                unit_amount : 48,
                images : [""]
            },
        ]
      }
      const init = {
        method :"POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify({
            search : search,
        }),
      };
      let prod_url="https://serverless-server.vercel.app";
      let local_url="http://localhost:3000";
      
      fetch(`${prod_url}/api/get-products`, init)
        .then(res => console.log(res))
        .catch(err => {
            let search_str = search.slice(1,-1);
            console.log(mockup[search_str]);
            if(mockup[search_str]){
                setSearchRes(mockup[search_str]);
            }
        })
      
                    

    },[search && search.length > 4 ])
   

        return (
            <div className="searchResults">
                {searchRes.length > 0 & search !=="" ? 
                    <div>
                        {searchRes.map((item) => (
                            <div style={{display : "flex"}}>
                                <p>{item.name}</p>
                                <p>{item.unit_amount}</p>
                                <figure style={{width:30, height:30, backgroundColor:"grey"}}>
                                    <img src={item.images[0]} style={{width:"100%"}} />
                                </figure>
                            </div>
                        ) )}
                    </div>
                : null}
          </div>
        )
}


