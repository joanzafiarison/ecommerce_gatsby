import React , {useState, useEffect} from "react";
import { ApolloClient, useQuery, gql , InMemoryCache } from "@apollo/client";

export default function GraphExemple ({search}) {
    const [searchRes, setSearchRes] = useState([])
    //console.log(searchRes.data)

    const queryParams = {
        search : search
    }
    
    let GET_SEARCH_PRODUCTS = gql`query ProductResults ($search : String!){
                results : allStripePrice (
                    filter : { product : {name : {regex : $search } } },
                    limit :3
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
        `
    const client = new ApolloClient({
        uri :"http://localhost:8000/__graphql",
        cache : new InMemoryCache()
    });

    useEffect(()=> {
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
        .then((res) => setSearchRes(res.data.products.edges))
        .catch(console.error)
    },[search])
   

        return (
            <div className="searchResults">
                {searchRes.length > 0 ? 
                    <div>
                        {searchRes.map( ({node : item }) => (
                            <div style={{display : "flex"}}>
                                <p>{item.product.name}</p>
                                <p>{item.unit_amount}</p>
                                <figure style={{width:30, height:30, backgroundColor:"grey"}}>
                                    <img src={item.product.images[0]} style={{width:"100%"}} />
                                </figure>
                            </div>
                        ) )}
                    </div>
                : null}
          </div>
        )
}

/*                {results_query.results.edges.map( ({node : result}) => (
                     <div style={{display:"flex"}}>
                        <p>{result.product.name}</p>
                        <p>{result.unit_amount} {result.currency}</p>
                        <figure style={{width:30, height:30}}>
                            <img src={result.product.images[0]} style={{width:"100%"}}/>
                        </figure>
                    </div>
                ) )}*/


