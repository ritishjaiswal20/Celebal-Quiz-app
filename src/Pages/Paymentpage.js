import React, { useState } from 'react'
import './Paymentpage.css'
import ReactDOM from "react-dom";
import LandingHeader from "../Components/LandingHeader";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
function Paymentpage() {
  const [price,setPrice]=useState (0);
  const  createOrder=(data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price,
          },
        },
      ],
    });
  }
  const   onApprove=(data, actions)=> {
    return actions.order.capture();
  }
  return (
    <div className="paymentpage">
      <LandingHeader/>
      <div className="wrapper">
        <label>Enter the amount</label>
        <input type="text" placeholder="Enter the amount" onChange={e=>setPrice(e.target.value)} value={price}/>
        <PayPalButton
           id="payment-button"
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </div>
  );
}

export default Paymentpage