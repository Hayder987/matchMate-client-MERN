import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/axios/useAxiosSecure";
import useAuth from "../Context/useAuth";

const CheckoutForm = ({ userContactBioData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();

  useEffect(() => {
      axiosSecure.post(`/create-payment-intent`, { price: 5 }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      Swal.fire({
        title: error.code,
        text: error.message,
        icon: "error",
      });
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.name,
          },
        },
      });
    if (confirmError) {
      Swal.fire({
        title: error.code,
        text: error.message,
        icon: "error",
      });
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const reqInfo = {
          userName: userContactBioData?.info?.name,
          bioId: userContactBioData?.bioId,
          ApplicantEmail: user?.email,
          userEmail: userContactBioData?.email,
          userPhone: userContactBioData?.info.mobileNumber
        };
        try {
          await axiosSecure.post(`/cheackrequest`,reqInfo)
          Swal.fire({
            title: "payment SuccessFully",
            text: `Transaction Id: ${paymentIntent.id}`,
            icon: "success",
          });
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: err.message || "An error occurred",
          });
        }
        
      }
    }
  };

  return (
    <div>
      <div className="border p-4">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="mt-6 btn py-2 px-5"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
