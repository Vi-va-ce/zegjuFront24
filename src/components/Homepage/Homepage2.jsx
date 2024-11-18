import React from 'react'
import { useNavigate } from 'react-router-dom';
import premium1 from "./premium1.svg"
import Button1  from "./Button1.svg"

function Homepage2({SatData}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (SatData === 'See plans') {
      navigate('/payment');
    } else if (SatData === 'Continue Preparing') {
      navigate('/Map');
    }
  };

  return (
 <div  id="pricing">
    <div className='pt-[18px]  md:pt-[40px]  ml-[86px]  md:ml-[340px] '>
         <div className=" md:w-[698.12px]  md:h-[60px]  w-[184.86px]  h-[15.89px]   text-center text-black text-xs md:text-4xl font-bold font-['Arial']  ">Find a plan that’s right for you</div>
    </div> 
    <div className='flex justify-evenly mt-[20px] '>
    <div className="w-[28.36px]  h-[6.36px]  md:w-[107.08px]  md:h-6 text-center text-green-700 text-[5.30px]  md:text-lg font-bold font-['Arial'] ">Select plan</div>
    <div className="w-[28.30px]  h-[6.36px]  md:w-[107.08px]  md:h-6  text-center text-black text-[5.05px]  md:text-lg font-bold font-['Arial mr-[30px] '] ">Add Payroll</div>
    <div className="w-[23.34px]  h-[6.36px]  md:w-[107.08px]  md:h-6  text-center text-black text-[5.09px]  md:text-lg font-bold font-['Arial'] ">Checkout</div>
    </div>
    <div className='pt-[30px]   flex '>
      <div className="ml-[40px]  md:ml-[270px]  mt-[20px]  md:mt-[80px]  mr-[10px]  md:mr-[50px]  w-[87.39px]  h-[138.76px]  md:w-[230px]  md:h-[324px]  rounded-[20px]  rounded-md border md:border-2 border-green-700 " >
      <div className=" ml-[14px]  md:ml-[32px]  mt-[7px]  w-[56.67px]  h-[14.83px]  md:w-[159px]  md:h-12 md:rounded relative bg-slate-300 rounded-[1.06px] " >
         <div className="ml-5 md:ml-[50px]  mt-4 text-white text-[9.12px]  md:text-[30.45px]  font-bold font-['Inter'] ">Free</div>
         <div className="mt-3 ml-2 md:ml-4 text-slate-300 text-[10.59px]  md:text-[30px]  font-bold font-['Inter'] ">ETB 0.00</div>
         <div className="ml-7 mt-[-4px]  md:mt-[-12px]  text-slate-300 text-[8.47px]  md:text-[28px]  font-bold font-['Inter']  mb-2">/month</div>
         <div className='flex ml-[-8px]  pb-1'>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-slate-300 text-[6.08px]  md:text-[19.96px] font-normal font-['Inter']  underline">Limited diagnostic test</div>
         </div>
         <div className='flex ml-[-8px]  pb-1'>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-slate-300 text-[6.08px]  md:text-[19.96px] font-normal font-['Inter']  underline">Limited practice test</div>
         </div>
         <div className='flex ml-[-8px] '>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-slate-300 text-[6.08px]  md:text-[15.96px] font-normal font-['Inter']  underline">Limited mock testt</div>
         </div>
      </div>
        </div>
        <div>
        <div className="ml-3.5 md:ml-[33px]   w-[56.67px]  h-[15.09px]  md:w-[214px]  md:h-[47px]  relative bg-slate-300 rounded-tl-md rounded-tl-md md:rounded-t-[20px]  rounded-bl-[1.06px]  rounded-br-[1.06px] " ><div className="ml-2.5 md:ml-[45px]  pt-1 text-white text-[9.12px]  md:text-[30.45px]  font-bold font-['Inter'] ">Premium</div></div>
        <div className=" mr-[10px]  md:mr-[40px]  w-[87.39px]  h-[195.95px]   md:w-[280px]  md:h-[474px]  md:rounded-[20px]  rounded-md border md:border-2 border-slate-300">
        
        <img className="w-[46.08px]  h-[46.08px]  md:w-[120px]  md:h-[120px]  ml-[20px]  md:ml-[70px]  mt-4 " src={premium1} />

        <div className="mt-3 ml-6 md:ml-[75px]  text-slate-300 text-[10.59px]  md:text-[30px]  font-bold font-['Inter'] ">ETB 3000</div>
         <div className="ml-8 mt-[-4px] md:mt-[-12px] md:ml-[90px]  text-slate-300 text-[8.47px] md:text-[28px]  font-bold font-['Inter']  ">/month</div>

        <div className='flex ml-[12px]  md:ml-[60px] md:mt-2 mt-1'>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-slate-300 text-[6.08px] md:text-[19.96px]  font-normal font-['Inter']  underline">Diagnostic Test</div>
         </div>

         <div className='flex ml-[12px] md:ml-[60px] md:mt-2  mt-1'>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-slate-300 text-[6.08px]  md:text-[19.96px]  font-normal font-['Inter']  underline">Practice Test</div>
         </div>

         <div className='flex ml-[12px] md:ml-[60px] md:mt-2  mt-1'>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-slate-300 text-[6.08px]  md:text-[19.96px] font-normal font-['Inter']  underline">Study Plan</div>
         </div>

         <div className='flex ml-[12px] md:ml-[60px] md:mt-2  mt-1'>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-slate-300 text-[6.08px]  md:text-[19.96px] font-normal font-['Inter']  underline">Quiz</div>
         </div>

         <div className='flex ml-[12px] md:ml-[60px] md:mt-2  mt-1'>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-slate-300 text-[6.08px]  md:text-[19.96px] font-normal font-['Inter']  underline">Lesson</div>
         </div>

         <div className='flex ml-[12px] md:ml-[60px] md:mt-2  mt-1'>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-slate-300 text-[6.08px]  md:text-[19.96px] font-normal font-['Inter']  underline">Mock Test</div>
         </div>


        </div>
        </div>
      <div className="mt-[20px]  md:mt-[80px]  w-[87.39px]  h-[138.76px]   md:w-[230px]  md:h-[324px]  rounded-[20px]  rounded-md border md:border-2 border-green-700" >
      <button
        className="ml-[14px]  md:ml-[34px]  mt-[7px]  md:mt-[16px]  w-[56.67px]  h-[14.83px]   md:w-[159px]  md:h-12 md:rounded  relative bg-green-700 rounded-[1.06px]"
        onClick={handleNavigate}
      >
        <p className="ml-0 md:ml-[1px]  m text-white text-[9.12px]  md:text-[30.45px]  font-bold font-['Inter']">Basic</p>
      </button>
          <div className="mt-3 ml-2 md:ml-4 text-green-700 text-[10.59px]  md:text-[30px]  font-bold font-['Inter'] ">ETB 750</div>
         <div className="ml-7 mt-[-4px]  md:mt-[-12px]  text-green-700 text-[8.47px]  md:text-[28px]  font-bold font-['Inter']  mb-2">/month</div>
          <div className='flex ml-[-2px]  pb-1'>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-gray-950 text-[6.08px]   md:text-[19.96px] font-normal font-['Inter']  underline">Diagnostic Test</div>
         </div>
         <div className='flex ml-[-2px]  pb-1'>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-gray-950 text-[6.08px]  md:text-[19.96px] font-normal font-['Inter']  underline">Practice Test</div>
         </div>
         <div className='flex ml-[-2px] '>
         <div className="mt-0.5  relative"><img src={Button1} className='w-[7.35px]  h-[7.35px] md:w-[27.75px] md:h-[27.75px] '/></div>
         <div className="text-gray-950 text-[6.08px]   md:text-[19.96px] font-normal font-['Inter']  underline">Mock Test</div>
         </div>
       
      </div>
    </div>
</div>
    )
}

export default Homepage2