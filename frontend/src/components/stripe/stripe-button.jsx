import "./stripe-button.scss";

import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const API_KEY =
    "pk_test_51Oo2mXSAaBuyG6viz6dCTEhboGzCQhQdclPKqU7gsSUJkufHv1THVSveQg5Tel1PVSDlZThbNdOCsZalyHif79fZ00wFvdblD0";

  const onToken = (token) => {
    console.log(token);

    // TODO: send the token to your server
    const url = "payment";
    const data = { amount: priceForStripe, token };

    fetch(url, { method: "POST", body: JSON.stringify(data) })
      .then((res) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error).error.message);
        alert("There was an issue with your payment");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothify"
      billingAddress
      shippingAddress
      //   image={<SiMoneygram />}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={API_KEY}
    />
  );
}

export default StripeCheckoutButton;
