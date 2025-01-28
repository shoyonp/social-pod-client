import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiossecure = useAxiosSecure();
  const { user } = useAuth();
  const price = 10;

  // update the badge
  const handleChangeBadge = async (email) => {
    const res = await axiossecure.post("/payment-success", { email });
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      toast.success("Payment success & Badge updated to Gold successfully");
    } else {
      toast.error("Already has Gold badge");
    }
  };

  useEffect(() => {
    axiossecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiossecure, price]);

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
      console.log("payent error", error);
      setError(error.message);
    } else {
      console.log("payment methode", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
    }
  };
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="border border-gray-300 p-3 rounded-lg mb-4">
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
        </div>
        <button
          onClick={() => handleChangeBadge(user?.email)}
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300 "
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        {transactionId && (
          <p className="text-green-600 text-sm mt-3 font-medium">
            Your Transaction ID: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
