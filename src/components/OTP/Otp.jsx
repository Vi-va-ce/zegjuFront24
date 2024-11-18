import React, { useState } from "react";
import { useSelector } from "react-redux";
import Send from "./Send";
import Verify from "./Verify";
import Success from "./Success";
import Toast from "./Toast";
import { visionary, jonly } from "../../assets";
import SignupPage from "../SignupPage";
import RegistrationForm from "../RegisterationForm";

const Otp = () => {
  const { showComp, success } = useSelector((state) => state.otp);
  const [isVerified, setIsVerified] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");


  return (
    <div>
      <div className="flex">
       <div className="mt-[0px] md:mt-[-28px] ml-[60px] mb-[80px]">
          <img src={jonly} className="w-[275px] md:w-[194px] h-[550px] md:h[270px] relative" alt="jonly" />
        </div>
        <div className="hidden md:block">
          <img src={visionary} alt="visionary" className="w-[900px] h-[px] absolute ml-[-200px] mt-[-80px]" />
        </div>
        <div className=""></div>
        <div className="absolute mt-[120] md:mt-[-30px] ml-1 md:ml-[600px]">
          <div className="mt-[90px] md:mt-[40px] md:ml-[30px] ml-[13px]">
            <div className="phone-container">
              <div className="mt-10 p-3 text-center text-2xl font-bold leading-9 tracking-tight create-account-style">Create Account</div>
              <div className="">
                <div className="form-field"></div>
                <div className="otp-container">
                  {showComp && !isVerified ? (
                    <Send onPhoneSubmit={setPhoneNumber} />
                  ) : !showComp && !success ? (
                    <Verify onClick={() => setIsVerified(true)} />
                  ) : (
                    <RegistrationForm phoneNumber={phoneNumber} />
                  )}
                </div>

                <Toast />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;