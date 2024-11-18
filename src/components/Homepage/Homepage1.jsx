import React from 'react'
import gradient1 from "./gradient1.svg"
import armcrossed1 from "./armcrossed1.svg"
import Ellipse76 from "./Ellipse76.svg"

function Homepage() {
  return (
    <div className='  '>
      
      <div className='relative flex '>
        
        <img src={gradient1} className='shrink md:w-[1115px] md:h-[540.175px] flex-shrink-1 ml-0 md:ml-[-200px] mt-0 md:mt-[-100px] w-[267px] h-[180px] relative'/>
        
        <div className="absolute w-[124.45px] h-[36.45px] w-[41.12px] h-[41.12px] md:w-[519px] md:h-[152px] mt-[38px]  ml-[56px] md:ml-[150px]">
        <div className="absolute w-[9.86px] h-[9.86px]  md:w-[41.12px] md:h-[41.12px]  origin-top-left rotate-[-12.93deg] border border-green-500 ml-[54px] md:ml-[140px] mt-[-5px] md:mt-[-40px]" />
          <div className=''>
          <span className="text-cyan-300 text-sm md:text-5xl font-semibold font-inter">Enhance</span>
          <span className="text-white text-sm md:text-5xl  font-semibold font-inter">. Your. <br/></span>
          <span className="text-cyan-300 text-sm md:text-5xl  font-semibold font-inter leading-[-20px]">Intellect.</span>
          </div>
         
        </div>
        
        <div className="absolute w-[179.36px] md:w-full  text-white text-[6.71px] md:text-[22px]  font-normal font-['Arial'] mt-[126px] md:mt-[200px] ml-[56px] flex-shrink-0">Allow us to guide you on an easy and relaxing learning <br/> experience. Discover your areas of weakness and practice <br/>on them with our personalized timetable to improve your <br/> SAT knowledge with Zegju's assistance.</div>
        <img src={armcrossed1} className='flex-shrink-0 w-[96px] h-[162px] md:w-[325px] h-[550px] absolute ml-[200px] md:ml-[500px] md:mt-[-94px] mt-[-200px]'/>
        <img src={Ellipse76} className='w-[44px] h-[54px] md:w-[120px] md:h-[200.175px] flex-shrink-0 mt-[80px] md:mt-[170px] ml-[17px] md:ml-[-130px]'/>
     </div>
    
    </div>
  )
}

export default Homepage