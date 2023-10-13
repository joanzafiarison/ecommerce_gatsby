import React , {useEffect, createContext} from "react";
import { getProducts } from "../services/checkout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//avec typescript pour mettre en place un meilleur controle du context 

const checkout_context = createContext();
const payment_context = createContext();
const search_context = createContext(null);

const CheckoutProvider = ({children}) =>{
    const [overlay, setOverlay] = React.useState(false);
    const [checkout, setCheckout] = React.useState([]);
    const [size,setSize] = React.useState("XS");
    const [productDetail, setProductDetail] = React.useState({});
    const [overlayMessage, setOverlayMessage] = React.useState("");
    useEffect(()=>{
        console.log("products",getProducts())
        setCheckout(getProducts());
        console.log(checkout);
        console.log("in use effect")
    },[]);

    useEffect( () => {
       console.log("useEffect overlay --",overlayMessage )
       setTimeout(() => {
        console.log("end overlay"); 
        setOverlayMessage("");
       },2000)
    },[overlayMessage && overlayMessage != ""])

    return (
        <checkout_context.Provider value={{checkout, setCheckout, overlay, setOverlay,  size, setSize , productDetail, setProductDetail, overlayMessage, setOverlayMessage}}>
            {children}
        </checkout_context.Provider>
    )

}

const SearchProvider = ( {children} ) => {
    const [ search, setSearch ] = React.useState("");
    return(
        <search_context.Provider value={{ search, setSearch}}>
            {children}
        </search_context.Provider>
    )
}

const PaymentProvider =( {children}) => {
    const [deliveryInfo, setDeliveryInfo] = React.useState({})
    const [checkoutContent, setCheckoutContent] = React.useState({})
    const [cardInfo, setCardInfo] = React.useState({})

    return (
        <payment_context.Provider value = {{deliveryInfo, setDeliveryInfo, checkoutContent, setCheckoutContent, cardInfo, setCardInfo}}>
            {children}
        </payment_context.Provider>
    )
}

const DataProvider = ( {children} ) => {
    const client  = new ApolloClient({
        uri : "http://localhost:8000/__graphql",
        cache : new InMemoryCache()
      });
    
      return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
      )

}

export {checkout_context, payment_context, search_context, SearchProvider, CheckoutProvider, PaymentProvider, DataProvider}