import React from 'react';
import { arifs, chapas, scs, checks } from '../../assets';

function PaymentButtons({ selected, setSelected }) {
  const buttons = [
    { id: 'arifs', img: arifs },
    { id: 'chapas', img: chapas },
    { id: 'scs', img: scs },
  ];

  return (
    <div className="flex md:block space-x-2 md:space-y-4">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => setSelected(button.id)}
          className={`relative w-[117px] md:w-[350px] h-[56px] md:h-[140px] flex flex-col justify-center items-center rounded-md transition-all duration-300 shadow-md ${
            selected === button.id
              ? 'border-[0.98px] border-[#0fa958] bg-[rgba(15,169,88,0.05)]'
              : 'bg-white'
          } hover:bg-[rgba(15,169,88,0.15)]`}
        >
          <img
            src={button.img}
            alt={button.id}
            className="w-[80px] h-[40px] md:w-[160px] md:h-[80px]"
          />
          {selected === button.id && (
            <img
              src={checks}
              alt="Check"
              className="absolute md:top-2 md:right-2 top-1 right-1 md:w-6 md:h-6 w-3 h-3"
            />
          )}
        </button>
      ))}
    </div>
  );
}

export default PaymentButtons;