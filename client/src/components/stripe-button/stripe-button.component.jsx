import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StriperCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HVDpeBLRp6AsK2RFO0B04HLPs4MeCZcjCYSbRrBMDrdPFfexxGBamacOOnAdIHJWPDxVFGhllWFakDDrwdgGY5F00gjxFX4fQ";

  const onToken = (token) => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment Error :", error);
        alert(
          "There was an issue with your payment , please make sure you use provided credit card"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Sindhwani - Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StriperCheckoutButton;
