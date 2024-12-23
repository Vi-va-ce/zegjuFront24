import React from 'react'
import {she} from "../../assets"
import { useNavigate } from 'react-router-dom';

function Box2({FreshData,onClickButton2}) {
  const handleClick = () => {
    onClickButton2('scroll');
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (FreshData === 'See plans') {
      navigate('/payment');
    } else if (FreshData === 'Continue Preparing') {
      navigate('/Subject_page2');
    }
  };
  

    return (
      <div>
      <div className="w-[90.03px] h-[105.82px] md:w-[240px] md:h-[299.61px]  bg-slate-200 rounded-[3.18px] md:rounded-xl relative">
      </div>

      <div className="ml-[35px] md:ml-[60px] mt-[-90px] md:mt-[-260px] absolute">
        <img className="w-[20px] h-[20px] md:w-[100px] md:h-[70px]" src={she}/>
      </div>

      <div className="md:ml-[44px] ml-[13px] md:mt-[-198px] mt-[-68px] absolute">
        <div className=" text-center text-black text-[10.76px] md:text-[28.07px] font-bold font-['Arial'] ">Freshman<br/>Courses</div>
      </div>

      <button className="bg-green-700 hover:bg-green-900 w-[38px] md:w-[120px] h-[16px] md:h-[55px] rounded rounded-xl absolute mt-[-33px] md:mt-[-110px] ml-[26px] md:ml-[58px] "onClick={handleNavigate}>
       
      <p className='mt-[-3.5px] md:mt-[-3px] text-[3.76px] md:text-[18.07px] text-white font-bold md:font--semibold'>{FreshData}</p>
         
      </button>
    </div>
      );
    }

export default Box2