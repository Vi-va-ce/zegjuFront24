import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import { backb } from '../../assets';
import List from './List';

function Uni() {
  const location = useLocation();
  const { universities } = location.state || { universities: [] };



  return (
    <div className='bg-[#ecf7f8] min-h-screen'>
      <Link to='/FinalMid'>
        <button className='pl-[12px] pt-[12px] transition-transform duration-300 hover:scale-110'>
          <img src={backb} alt='Back' />
        </button>
      </Link>
      <div className='pt-[70px] md:pt-[0px] flex items-center justify-center pb-52'>
        <div><List universities={universities} /></div>
      </div>
    </div>
  );
}

export default Uni;