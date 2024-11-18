import React from 'react';
import { backb } from '../../assets';
import { Link } from 'react-router-dom';
import PaymentForm from './PaymentForm';

function Payamentmain() {

  return (
    <div className='bg-[#ecf7f8] min-h-screen'>

    <Link to='/payment'>
      <button className='pl-[12px] pt-[12px] transition-transform duration-300 hover:scale-110'>
        <img src={backb} />
      </button>
    </Link>
      <div className='pt-[20px] md:pt-[0px] flex items-center justify-center pb-52'>
        <PaymentForm />
      </div>
    </div>
  );
}

export default Payamentmain;