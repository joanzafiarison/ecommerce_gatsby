import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51M0nfLCCYPKeoOztSGpzyKIEqedMApAKAguPeyVWhhKa69yK9684A5WGJatvEdsihZvF1uYI0amwAhMX40m5dTma00BB7AiPF8');


async function process_payment (products,base_url){
    const stripe = await stripePromise;
    let data_products = products.map( (el) =>  {
        return {"price" : el.id, "quantity" : el.quantity }
    });
    console.log("product", data_products);
    const { error } = await stripe.redirectToCheckout({
        lineItems: data_products,
        mode : "payment",
        successUrl : `${base_url}/app/payment/success`,
        cancelUrl : `${base_url}/app/payment/failed`,
    })
    return error;
}

export {
    process_payment,
}