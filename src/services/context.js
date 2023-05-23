import React , {createContext} from "react";
import { getProducts } from "../services/checkout";

//avec typescript pour mettre en place un meilleur controle du context 

const checkout_context = createContext();
const payment_context = createContext();

const CheckoutProvider = ({children}) =>{
    const [overlay, setOverlay] = React.useState(false);
    const [checkout, setCheckout] = React.useState(JSON.parse(getProducts())["products"]);
    const [size,setSize] = React.useState("XS");
    console.log(JSON.parse(getProducts())["products"])
    return (
        <checkout_context.Provider value={{checkout, setCheckout, overlay, setOverlay,  size, setSize}}>
            {children}
        </checkout_context.Provider>
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

export {checkout_context, payment_context,  CheckoutProvider, PaymentProvider}