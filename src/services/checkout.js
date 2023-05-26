export const isBrowser = () => typeof window !== "undefined";

export const getProducts = () => {
    isBrowser() && window.localStorage.getItem("ecom_products") ?
        window.localStorage.getItem("ecom_products")
        : {}
}

export const handleProducts = ({products}) => {
    setProducts(products);
}

export const clearCheckout = () => {
    setProducts({})
}

function setProducts(data){
    window.localStorage.setItem("ecom_products",JSON.stringify(data))
}



