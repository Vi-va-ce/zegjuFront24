import React from "react";
import Signupbar from "./Signupbar";
import SignHeroTwo from "./SignHeroTwo";
import Otp from "./OTP/Otp";

const OtpPage = () => {
  return (
    <div className="gradient-background">
      <div>
        <Signupbar />
      </div>
      <div className="">
        <Otp  />
      </div>
    </div>
  );
};

export default OtpPage;