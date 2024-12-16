import React from 'react';

function PaymentDetails({ buttonName, price }) {
  return (
    <div className="bg-black md:w-[736px] md:h-[45px] md:mt-[60px] mt-[40px] rounded-b-lg">
      <div className="flex items-center justify-between pl-16 pr-16 pt-1">
        <p className="text-white md:text-[24px] text-[13px]">{buttonName}</p>
        <p className="text-white md:text-[24px] text-[13px]">{price} ETB</p>
      </div>
    </div>
  );
}

export default PaymentDetails;