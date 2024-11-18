import React from "react";
import styles from "../style";
import { ztar,jonly,first1,secondone,forward } from "../assets";
import Loginform from "./LoginForm";
import LoginLinks from "./LoginLinks";




const WelcomeHero = ({onLoginSuccess}) => {
  return (
    <section id="signHero" className={`flex ${styles.paddingY}`}>
      <div className="md:hidden">
      <div className="mt-[0px] md:mt-[-28px] ml-[60px] mb-[80px]">
      <img src={jonly} className="w-[275px] md:w-[194px] h-[550px] md:h[270px] relative  " />
       </div> 
      </div>
   <div className="relative hidden  md:block ">
  <img src={ztar} alt="ztar" className="object-contain welcome-layout" />
  <span className="hidden  md:block  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl -rotate-90 origin-bottom">
    WELCOME
  </span>
</div>
    <div className="unscroll  md:ml-56 ml-8 mt-0 md:mt-6 pt-2 md:pt-16 absolute md:relative ">
      <Loginform onLoginSuccess = {onLoginSuccess}/>
     
    </div>
    <div className="place-self-end md:mb-24 mb-36 md:ml-24 ml-[240px] absolute md:relative ">
      <LoginLinks/>
    </div>
    
  </section>
  );
};

export default WelcomeHero;