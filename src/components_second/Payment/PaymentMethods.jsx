import React from 'react';
import { telebirr, cbebirr } from '../../assets';

function PaymentMethods({ paymentMethod, setPaymentMethod }) {
  const methods = [
    { id: 'telebirr', img: telebirr },
    { id: 'cbe', img: cbebirr },
  ];

  return (
    <div className="bg-white md:w-[736px] w-[360px] md:h-[140px] h-[86px] flex justify-between items-center rounded-md shadow-md">
      <div className="md:space-x-32 space-x-12 items-center pl-6 md:pl-12">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => setPaymentMethod(method.id)}
            className={`relative transition-all duration-300 ${
              paymentMethod === method.id
                ? 'border-[0.98px] border-[#0fa958] bg-[rgba(15,169,88,0.05)]'
                : 'bg-white'
            } hover:bg-[rgba(15,169,88,0.15)] rounded-md p-2`}
          >
            <img
              src={method.img}
              className="md:w-[215px] w-[115px] md:h-[70px] h-[34px]"
              alt={method.id}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethods;