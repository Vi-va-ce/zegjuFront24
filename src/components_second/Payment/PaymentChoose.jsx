import React, { useState } from 'react';
import { arifs, backb, chapas, checks } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';

function PaymentChoose() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleButtonClick = (button) => {
    setSelected(button);
    if (button === 'arifs') {
      navigate('/Arif'); // Navigate to /Payment when Arif is selected
    } else if (button === 'chapas') {
      navigate('/Chapa'); // Navigate to /chapa when Chapa is selected
    }
  };

  return (
    <div className='bg-[#ecf7f8] min-h-screen flex flex-col justify-center items-center relative'>
      <Link to='/'>
        <button className='absolute top-4 left-4 transition-transform duration-300 hover:scale-110'>
          <img src={backb} alt='Back' />
        </button>
      </Link>

      <div className='text-center mb-8'>
        <h2 className='text-xl font-semibold'>Select Payment Method</h2>
        <div className='w-16 h-[2px] bg-black mx-auto mt-1'></div>
      </div>

      <div className='flex space-x-4'>
       

        <button
          onClick={() => handleButtonClick('chapas')}
          className={`relative w-[173px] md:w-[350px] h-[87px] md:h-[176px] flex justify-center items-center rounded-md transition-all duration-300 shadow-md ${
            selected === 'chapas'
              ? 'border-[0.98px] border-[#0fa958] bg-[rgba(15,169,88,0.05)]'
              : 'bg-white'
          } hover:bg-[rgba(15,169,88,0.15)]`}
        >
          <img
            src={chapas}
            alt='Chapas'
            className='w-[80px] h-[40px] md:w-[160px] md:h-[80px]' // Increase image size on md screens
          />
          {selected === 'chapas' && (
            <img
              src={checks}
              alt='Check'
              className='absolute top-2 right-2 w-6 h-6'
            />
          )}
        </button>
        <button
          onClick={() => handleButtonClick('arifs')}
          className={`relative w-[173px] md:w-[350px] h-[87px] md:h-[176px] flex justify-center items-center rounded-md transition-all duration-300 shadow-md ${
            selected === 'arifs'
              ? 'border-[0.98px] border-[#0fa958] bg-[rgba(15,169,88,0.05)]'
              : 'bg-white'
          } hover:bg-[rgba(15,169,88,0.15)]`}
        >
          <img
            src={arifs}
            alt='Arifs'
            className='w-[80px] h-[40px] md:w-[160px] md:h-[80px]' // Increase image size on md screens
          />
          {selected === 'arifs' && (
            <img
              src={checks}
              alt='Check'
              className='absolute top-2 right-2 w-6 h-6'
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default PaymentChoose;
