import React from 'react'
import  Icon  from './Icon.png';
import Linkedin from "./LinkedIn.png"
import Facebook from "./Facebook.png"
import Youtube from "./Youtube.png"
import Twitter from "./Twitter.png"
import Instagram from "./Instagram.png"

function Footer() {
  return (
    <div className=''>
      <div className="w-full h-9 md:h-[70px] bg-black">
        <div className=" ml-[88px] md:ml-[550px] pt-2.5 md:pt-4 w-[184.86px] h-[15.89px]   text-center text-white text-xs md:text-3xl  font-bold font-['Arial'] leading-none">Contact us</div>
     </div>
    <div>
        <div className="mt-4 md:mt-12 ml-14 w-[161.47px] h-[17.21px] md:w-[520.78px] md:h-[65px] text-black text-base md:text-[38.78px] font-bold font-['Arial'] leading-[17.21px]">Contact Zegju</div>
        <div className="ml-14 md:ml-[75px] mt-0 md:mt-[-30px] w-[140.77px] h-[7.63px] md:w-[682.67px] md:h-[8.80px] text-black text-[4.77px] md:text-[12px] font-normal font-['Arial'] leading-[7.63px]">We appreciate your interest in Zegju. </div>
        <div className="ml-14 mb-2  mt-[40px] w-[107.84px] h-[12.71px]  md:w-[520.78px] md:h-[65px] text-black text-xs md:text-[32.78px] font-bold font-['Arial'] leading-[13.35px]">General Inquiries</div>
     </div>
     <div className='flex justify-around ml-2 mb-8'>
     <div className="w-[68.61px] h-[7.94px] md:w-[259.11px] md:h-[30px]  text-black text-[7.51px] md:text-[22.36px] font-black font-['Arial'] leading-[7.94px]"><a href="tel:+251928665592">+251928665592</a></div>
     <div className="w-[68.61px] h-[7.94px] md:w-[259.11px] md:h-[30px]  text-black text-[7.51px] md:text-[22.36px] font-black font-['Arial'] leading-[7.94px]"><a href="tel:+251928665592">+251972766576</a></div>
     <div className="w-[68.61px] h-[7.94px] md:w-[259.11px] md:h-[30px]  text-black text-[7.51px] md:text-[22.36px] font-black font-['Arial'] leading-[7.94px]">
        Find A Location<br/>
        <div className=" h-[4.24px]  md:w-[200.56px] md:h-4 text-black text-[4.24px] md:text-base font-normal font-['Arial'] leading-[6.78px] md:leading-relaxed">View a  office information.<br/>
            <div className='flex'>
                <div className=" relative flex-col justify-start items-start inline-flex " ><img src={Icon} className='w-[7.41px] h-1.5 md:w-7 md:h-[22.50px]'/></div>
                <div className="w-[42.07px] h-[4.24px] md:w-[158.87px] md:h-4 text-blue-600 text-[4.24px] md:text-[12px] font-bold font-['Arial'] leading-[6.78px] md:leading-relaxed">Find office locations</div>
            </div>
        
</div>
     
     </div>
     
     </div>
     <div className="w-full h-[82px] md:h-[120px]  bg-black">
     <div className='flex pt-4 md:pt-8'>
     <div className='ml-[0px] md:ml-[00px]'>
            <a href="https://t.me/zegjucom">
            <img src={Linkedin} alt="Image description" class="w-[30px] h-[30px] ml-[46px] md:ml-[430px] mr-8 md:mr-[70px]" />
            </a>
        </div>
        <div>
            <a href="https://twitter.com/ZegjuExamPrep">
            <img src={Twitter} alt="Image description" class="w-[30px] h-[30px] mr-8 md:mr-[70px]" />
            </a>
        </div>
        <div>
            <a href="https://www.facebook.com/profile.php?id=61557787221318&mibextid=ZbWKwL">
            <img src={Facebook} alt="Image description" class="w-[30px] h-[30px] mr-8 md:mr-[70px]" />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/zegjuexamprep?igsh=NDJ5YWw1aWV0eWdl">
            <img src={Instagram} alt="Image description" class="w-[30px] h-[30px] mr-8 md:mr-[70px]" />
            </a>
        </div>
        <div>
            <a href="https://www.youtube.com/channel/UCbUpUOUD82ATNLltD9jyXJg">
            <img src={Youtube} alt="Image description" class="w-[30px] h-[30px]" />
            </a>
        </div>
     </div>
     <div className='ml-8 mt-2 md:ml-[400px]  md:mt-6  mb-4'>
     <div className="w-[309.82px] md:w-[490.82px] h-[23.46px] relative border-t border-neutral-400">
        <div className='md:hidden'>
    <div className="h-[4.66px] pr-[7.89px] pt-[0.79px] pb-[0.95px] left-[-200px] top-[8.21px] absolute justify-start items-center inline-flex">
        <div className="w-[25.43px] h-[2.91px] text-neutral-400 text-[2.91px] md:text-[11px] font-normal font-['Arial'] underline leading-[4.66px] md:leading-[17.60px]">Privacy Statement</div>
    </div>
    <div className="h-[4.66px] pr-[7.89px] pt-[0.79px] pb-[0.95px] left-[33.32px] top-[8.21px] absolute justify-start items-center inline-flex">
        <div className="w-[27.25px] h-[2.91px] text-neutral-400 text-[2.91px] font-normal font-['Arial'] underline leading-[4.66px]">Terms & Conditions</div>
    </div>
    <div className="h-[4.66px] pr-[7.89px] pt-[0.79px] pb-[0.95px] left-[68.46px] top-[8.21px] absolute justify-start items-center inline-flex">
        <div className="w-[31.43px] h-[2.91px] text-neutral-400 text-[2.91px]  md:text-[11px]  font-normal font-['Arial'] underline leading-[4.66px] md:leading-[17.60px]">Cookie Policy/Settings</div>
    </div>
    <div className="h-[4.66px] pr-[7.89px] pt-[0.79px] pb-[0.95px] left-[107.78px] top-[8.21px] absolute justify-start items-center inline-flex">
        <div className="w-[32.89px] h-[2.91px] text-neutral-400 text-[2.91px]  md:text-[11px]  font-normal font-['Arial'] underline leading-[4.66px]">Accessibility Statement</div>
    </div>
    <div className="h-[4.66px] pr-[7.89px] pt-[0.79px] pb-[0.95px] left-[148.57px] top-[8.21px] absolute justify-start items-center inline-flex">
        <div className="w-[11.61px] h-[2.91px] text-neutral-400 text-[2.91px]  md:text-[11px]  font-normal font-['Arial'] underline leading-[4.66px] md:leading-[17.60px]">Sitemap</div>
    </div>
    <div className="h-[4.66px] pr-[7.89px] pt-[0.79px] pb-[0.95px] left-[168.07px] top-[8.21px] absolute justify-start items-center inline-flex">
        <div className="w-[70.79px] h-[2.91px] text-neutral-400 text-[2.91px]  md:text-[11px]  font-normal font-['Arial'] underline leading-[4.66px] md:leading-[17.60px]">Do Not Sell/Share My Personal Information (for CA)</div>
    </div>
    <div className="w-[54.80px] h-2.5 pt-[6.09px] pb-[0.95px] left-[255.02px] top-[2.91px] absolute justify-center items-center inline-flex">
        <div className="w-[54.85px] h-[2.91px] text-neutral-400 text-[2.91px]  md:text-[11px]  font-normal font-['Arial'] leading-[4.66px] md:leading-[17.60px]">© 2023 Zegju. All Rights Reserved.</div>
        </div>
    </div>
    </div>
</div>
     </div>


    </div>
  )
}

export default Footer