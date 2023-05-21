import React , {createContext} from "react";

//avec typescript pour mettre en place un meilleur controle du context 

const checkout_context = createContext();

const CheckoutProvider = ({children}) =>{
    const [overlay, setOverlay] = React.useState(false);
    const [checkout, setCheckout] = React.useState([]);
    const [size,setSize] = React.useState("XS");
    return (
        <checkout_context.Provider value={[checkout, setCheckout, overlay, setOverlay,  size, setSize]}>
            {children}
        </checkout_context.Provider>
    )

}
export {checkout_context, CheckoutProvider}