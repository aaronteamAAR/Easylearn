import  {loadStripe} from "@stripe/stripe-js"




let stripePromise

const setStripe = ( ) => {
    if(!stripePromise){
        stripePromise = loadStripe(process.env.API_KEY)
    }


    return stripePromise;
}
