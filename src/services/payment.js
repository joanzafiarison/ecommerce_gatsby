import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51M0nfLCCYPKeoOztSGpzyKIEqedMApAKAguPeyVWhhKa69yK9684A5WGJatvEdsihZvF1uYI0amwAhMX40m5dTma00BB7AiPF8');


async function process_payment (product,base_url){
    const stripe = await stripePromise;
    console.log("product", product)
    const { error } = await stripe.redirectToCheckout({
        lineItems: [{
            price : "price_1NBBKjCCYPKeoOztr9JStZ2x",
            quantity : 1,
        }],
        mode : "payment",
        successUrl : `${base_url}/app/payment/success`,
        cancelUrl : `${base_url}/app/payment/failed`,
    })
    return error;
}

export {
    process_payment,
}