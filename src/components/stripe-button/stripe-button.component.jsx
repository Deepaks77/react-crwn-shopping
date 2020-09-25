import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StriperCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HVDpeBLRp6AsK2RFO0B04HLPs4MeCZcjCYSbRrBMDrdPFfexxGBamacOOnAdIHJWPDxVFGhllWFakDDrwdgGY5F00gjxFX4fQ";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
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
