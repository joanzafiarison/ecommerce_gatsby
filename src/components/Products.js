import React from 'react'; 
import { graphql, StaticQuery} from 'gatsby';
import Product from './Product';

export default function Products (){
    return(
        <StaticQuery
            query={graphql`
             query ProductPrices {
                prices : allStripePrice (
                    filter : {active : {eq : true} },
                    sort : {unit_amount: ASC}
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
            `}
            render={( {prices} ) => (
                <div>
                    {prices.edges.map( ({node : price}) => (
                        <Product 
                            key={price.id} 
                            name={price.product.name}
                            price='25.89'
                            desc={price.product.description}
                            images={price.product.images[0]}
                             />
                    ))}
                </div>
            )} 
            />
    )
}