import React , {useState, useEffect} from "react";
import { ApolloClient, useQuery, gql , InMemoryCache } from "@apollo/client";

function getSearchResults(client,search){
    client.query({
        query: gql`
           query SearchQuery ($search : String!) {
                products : allStripePrice (
                    filter : { product : {name : {regex : $search } } },
                    limit : 5
                ) {
                    edges {
                        node {
                            id 
                            active
                            currency
                            unit_amount
                            product {
                                id
                                name
                                description
                                images
                            }
                        }
                    }
                }
           } 
        `,
        variables : {
                search :search
        }
    })
}
//.then((res) => setSearchRes(res.data.products.edges))
//.catch(console.error)

export default function GraphExemple ({search}) {
    const [searchRes, setSearchRes] = useState([])
    //console.log(searchRes.data)
    
    const client = new ApolloClient({
        uri :"http://localhost:8000/__graphql",
        cache : new InMemoryCache()
    });

    useEffect(()=> {
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
      let prd = fetch(`${prod_url}/api/get-products`, init)
                    .then((res)=> res.json())
                    .then(res => setSearchRes(res))
                    .catch(console.error)

    },[search && search.length%3===0])
   

        return (
            <div className="searchResults">
                {searchRes.length > 0 & search !=="" ? 
                    <div>
                        {searchRes.map((item) => (
                            <div style={{display : "flex"}}>
                                <p>{item.name}</p>
                                <p>item.unit_amount</p>
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


