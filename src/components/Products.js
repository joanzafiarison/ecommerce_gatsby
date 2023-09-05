import React, { useState } from 'react'; 
import { graphql, StaticQuery} from 'gatsby';
import Product from './Product';

export default function Products ( {page, weight }){
    return(
        <div className="product_grid">
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
                    <>
                        {prices.edges.slice(page*weight,page*weight+weight).map( ({node : price}) => (
                            <Product 
                                key={price.id} 
                                id={price.id}
                                name={price.product.name}
                                price={(price.unit_amount/100).toString().padEnd(2, '0')}
                                desc={price.product.description}
                                images={price.product.images}
                                />
                        ))}
                    </>
                )} 
                />
        </div>
    )
}