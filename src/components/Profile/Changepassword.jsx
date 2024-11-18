import React, { useState } from 'react';
import TestNav from '../TestNav'
import smallj from "./smallj.svg"

function Changepassword({standardfirstName,satEnglish,satMath,average,picture}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        // You can access the form field values using the state variables (firstName, lastName, email, phoneNumber, educationStatus)
      };
    
  return (
<div>
<div className="w-[360px] h-[500px] md:w-full md:h-[440px] relative bg-gradient-to-br from-teal-800 to-black">
<TestNav/>
    
    <img className="w-[76.16px] h-[76.16px]  left-[35.27px] top-[180.07px] md:w-40 md:h-40 md:ml-[100px] md:mt-[-80px] md:rounded-[187px] absolute rounded-[55.63px]" src={picture} />
    <div className="text-white text-xs mt-[220px] ml-[39px] md:mt-[190px] md:ml-[130px] md:text-2xl font-normal font-['Inter']">Esrom sharew</div>
    <div className="text-white text-[8px] md:text-xl ml-[240px] md:ml-[940px] mt-[-55px] md:mt-[-100px] font-medium font-['Inter']">SAT English</div>
    <div className="text-white text-[8px] md:text-xl ml-[293px]  md:ml-[1090px]  mt-[-12px]  md:mt-[-27px] font-medium font-['Inter']">SAT Math</div>
    <div className="left-[135.82px] top-[200.90px] md:ml-[300px] md:mt-[-60px] absolute text-white text-[28.56px] md:text-7xl font-bold font-['Inter']">{average}</div>
    <div className="w-[13.04px] h-[0px] md:w-[43.84px] md:h-[0px] md:ml-[330px] md:mt-[-20px] left-[166.46px] top-[232.43px] absolute origin-top-left -rotate-45 border border-white"></div>
    <div className="left-[171.22px] top-[226.18px] md:ml-[340px] md:mt-[-28px] absolute text-white text-[9.52px] md:text-[22px] font-normal font-['Inter']">100</div>
    <img className="w-15 h-15 md:w-[200px] md:h-[200px] left-[191.22px]  md:ml-[450px] md:mt-[-120px] top-[170.18px] absolute" src={smallj} />

    <div className="w-[61.58px] md:w-[100px] h-[0px] md:ml-[778px] left-[287.25px] top-[188.70px] md:ml-[390px] md:mt-[-80px] absolute origin-top-left rotate-90 border border-white"></div>

    <div className=''>
    
    <div className="w-[29.75px] h-[29.75px] md:w-[100px] md:h-[100px] left-[246.79px] top-[203.28px] md:ml-[700px] md:mt-[-90px] absolute bg-cyan-400 bg-opacity-80 rounded-full" />
    <div className="left-[256.01px] top-[212.50px] absolute text-white text-[9.52px] md:text-[32px] md:mt-[-73px] md:ml-[723px]  font-bold font-['Inter']">{satEnglish}</div>
   
    <div className="w-[29.75px] h-[29.75px] md:w-[100px] md:h-[100px] left-[298.25px] top-[203.28px]  md:ml-[780px] md:mt-[-90px]  absolute bg-green-400 rounded-full" />
    <div className="left-[306.88px] top-[212.50px] absolute text-white text-[9.52px] md:text-[32px] md:mt-[-73px]  md:ml-[803px] font-bold font-['Inter']">{satMath}</div>
    </div>   
    <div className="w-[38.83px] h-[95.03px] left-[191.45px] top-[167.73px] absolute">
    </div>
    <div className="w-[360px] h-[562px] md:w-full md:h-[300px] left-0 top-[315px] absolute bg-teal-200" />
    <div className="w-[295px] h-[303.02px] left-[35px] top-[362px] absolute bg-white rounded-xl md:w-[478px] md:h-[297px] md:ml-[390px] md:mt-[-100px] md:rounded-[18.69px]" />
    <div className="left-[60.92px] top-[389.15px]  md:ml-[390px] md:mt-[-100px] absolute text-gray-900 text-xs   font-normal font-['Inter']">old password</div>
    <div className="left-[60.92px] top-[511.35px]  md:ml-[390px] md:mt-[-100px] absolute text-gray-900 text-xs font-normal font-['Inter']">new password</div>
    <div className="left-[60.92px] top-[572.45px]  md:ml-[390px] md:mt-[-100px] absolute text-gray-900 text-xs font-normal font-['Inter']">confirm password</div>
    
  


    <div className="w-[198.72px] h-[29.01px] left-[60.92px]  md:ml-[390px] md:mt-[-100px] top-[412.61px] absolute">
     <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="absolute text-black text-xs font-normal font-['Inter'] w-[198.72px] h-[29.01px] md:w-[322px] md:h-[30px]  md:rounded-[24.93px] left-0 top-0 absolute bg-zinc-300 bg-opacity-0 rounded-2xl border border-cyan-300"/>
    </div>
    <div className="w-[198.82px] h-[29.01px] left-[60.92px]  md:ml-[390px] md:mt-[-100px] top-[473.71px] absolute">
     <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required className=" absolute text-black text-xs font-normal font-['Inter'] w-[198.82px] h-[29.01px] md:w-[322px] md:h-[30px]  md:rounded-[24.93px] left-0 top-0 absolute bg-zinc-300 bg-opacity-0 rounded-2xl border border-cyan-300 "/>
    </div>
    <div className="w-[198.82px] h-[29.01px] left-[60.92px]  md:ml-[390px] md:mt-[-100px] top-[534.80px] absolute">
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className=" absolute text-black text-xs font-normal font-['Inter'] w-[198.82px] h-[29.01px] md:w-[322px] md:h-[30px]  md:rounded-[24.93px] left-0 top-0 absolute bg-zinc-300 bg-opacity-0 rounded-2xl border border-cyan-300 "/>
     </div>
    
     <div className="left-[136.83px] top-[636.02px]  md:ml-[590px] md:mt-[-102px] absolute text-indigo-500 text-xs font-normal font-['Inter'] md:text-[18px]">Change password</div>
     <button className='w-[97px] h-[33.52px] bg-teal-600 rounded-[17.78px]' >
     <div className="text-white text-[22.82px] font-normal font-['Inter']">Save</div>  </button>

    
   
        
     
        
        
    </div>
</div>

    
  )
}

export default Changepassword