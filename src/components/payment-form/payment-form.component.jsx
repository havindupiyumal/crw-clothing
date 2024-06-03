import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { Spinner } from "../spinner/spinner.component";

export const PaymentForm = () => {
  const total = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsPaymentProcessing(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ amount: total * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.email : "Guest",
        },
      },
    });

    if (paymentResult.error) {
      console.log(paymentResult.error);
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Sccuessful");
      }
    }
    setIsPaymentProcessing(false);
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment :</h2>
        <CardElement />
        {isPaymentProcessing ? (
          <Spinner />
        ) : (
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>PAY NOW</Button>
        )}
      </FormContainer>
    </PaymentFormContainer>
  );
};
