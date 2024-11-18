import React from "react";
import { jonly, first1, secondone, forward } from "../../assets"
import PaymentForm from "./PaymentForm";




const PaymentComonent = () => {
  return (

    <div className="flex  ">
      <div className="mt-[28px] md:mt-[-28px]">
        <img src={jonly} className="hidden  md:block w-[275px] md:w-[194px] h-[700px] md:h[270px] relative  mr-[100px] md:mr-[]  ml-[25px] md:ml-[100px] mt-[-65px] md:mt-[-100px]  " />

      </div>


      <div className=" absolute mt-[120] md:mt-[-70px] ml-1 md:ml-[600px] ">

        <div className="mt-[10px] md:mt-[40px]">
          <PaymentForm />
        </div>
      </div>

    </div>

  );
};

export default PaymentComonent;