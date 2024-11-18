import React from 'react'
import { backb,circle2 } from '../../assets';
import { Link } from 'react-router-dom';
import Choice from './Choice';

function FinalMidz({ subjectName, message }) {
  return (
    <div className='bg-[#ecf7f8] min-h-screen'>

    <Link to= '/Subject_page2'>
      <button className='pl-[12px] pt-[12px] transition-transform duration-300 hover:scale-110'>
        <img src={backb} />
      </button>
    </Link>
      <div className='pt-[100px] md:pt-[0px] flex items-center justify-center pb-52'>
        <div><Choice/></div>
      </div>
    </div>
  )
}

export default FinalMidz