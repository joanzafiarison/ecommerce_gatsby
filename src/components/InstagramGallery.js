import React from 'react';
import { useStaticQuery, graphql} from "gatsby"

const InstagramGallery = () => {
/*
  const data = useStaticQuery(graphql`
            query InstagramPosts {
                allInstagramContent {
                    edges {
                        node {
                            id
                            caption
                            localImage{
                                childImageSharp {
                                    gatsbyImageData(layout: CONSTRAINED, placeholdre: BLURRED, width: 500, height: 500)
                                }
                            }
                        }
                    }
                }
            }
        `)
    console.log(data)*/
  return (
    <div>
        <h1>Instagram</h1>
    </div>
  )
}

export default InstagramGallery;