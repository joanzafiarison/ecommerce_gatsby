
function getProducts(){
    return window.localStorage.getItem("ecom_products");
}

function setProducts(data){
    window.localStorage.setItem("ecom_products",JSON.stringify(data))
}

function clearData(){
    window.localStorage.setItem("ecom_products",{});
}

export {
    getProducts,
    setProducts,
    clearData
}