import React from "react";
 import Signupbar from "../Signupbar"
import PaymentComonent from "./PaymentComponent";

const Payment = () => (
  <div className="gradient-background h-screen">

    <div>
      <Signupbar/> 
    </div>
    <div className=' ml-[30px] md:[ml-0] '>
      <PaymentComonent />

    </div>

  </div>
);
export default Payment