import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK_Key);

const Stripe = ({userContactBioData}) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm userContactBioData={userContactBioData}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Stripe;
