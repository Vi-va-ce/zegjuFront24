import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPhoneNumber,
  addUser,
  changeStateFalse,
  successTrue,
} from "./OtpSlice";
import toast from "react-hot-toast";
import OtpInput from "otp-input-react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase";

const Verify = () => {
  const dispatch = useDispatch();
  const { user, phoneNumber } = useSelector((state) => state.otp);
  const [otp, setOtp] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isVerifyButtonDisabled, setIsVerifyButtonDisabled] = useState(false);
  const [otpTime, setOtpTime] = useState(40);

  const [recaptcha, setRecaptcha] = useState(null);
  useEffect(() => {
    let recaptchaVerifier;
    recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
    });
    setRecaptcha(recaptchaVerifier);
  }, []);

  useEffect(() => {
    if (otpTime > 0) {
      const intervalId = setInterval(() => {
        setOtpTime(otpTime - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [otpTime]);

  const handleVerified  = () => {
    
    onVerified('verified');
  };


  const resendOTP = async () => {
    if (phoneNumber == null) {
      toast.error("something wrong try to again send otp");
      return;
    }

    if (isButtonDisabled) {
      return;
    }

    

    try {
      setIsButtonDisabled(true);
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+" + phoneNumber,
        recaptcha
      );
      toast.success("otp sended successfully");
      dispatch(addUser(confirmation));
      dispatch(addPhoneNumber(phoneNumber));
      dispatch(changeStateFalse());
      setOtpTime(40);
    } catch (error) {
      switch (error.code) {
        case "auth/too-many-requests":
          toast.error("Too many requests. Please try again later.");
          break;
        case "auth/invalid-phone-number":
          toast.error("The phone number is invalid.");
          break;
        default:
          toast.error("Something went wrong. Please try again later.");
          break;
      }
      console.log(error);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  const verifyOTP = async () => {
    if (isVerifyButtonDisabled) {
      return;
    }

    setIsVerifyButtonDisabled(true);
    try {
      const data = await user.confirm(otp);
      dispatch(successTrue());
      console.log(data);
      
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-verification-code":
          toast.error("The verification code is invalid.");
          break;
        case "auth/code-expired":
          toast.error("The verification code is expired.");
          break;
        default:
          toast.error("Something went wrong. Please try again later.");
          break;
      }
      console.log(error);
    } finally {
      setIsVerifyButtonDisabled(false);
    }
  };

  return (
    <div>
      <div className="phone-container">
        <div className="phone-title mb-4 mt-4"><p className="text-[18px]  font-bold text-teal-300">Enter your OTP</p></div>
        <div className="phone-subcontainer extra">
          <div className="phone-filed-otp">
            <div>
              <OtpInput
                value={otp}
                onChange={setOtp}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
              />
            </div>
          </div>
        <div className="flex">
          <div className="otp-details p-4">
            <button className="signuppage-layout signup-button " onClick={() => resendOTP()} disabled={otpTime > 0}>
              <span className="">{isButtonDisabled ? "Sending..." : "resend"}</span>
            </button>
          </div>

          <div className="phone-btn  p-4">
            <button
            className="signuppage-layout signup-button"
              onClick={() => verifyOTP()}
              id="verify-btn"
              disabled={isVerifyButtonDisabled}
            >
              {isVerifyButtonDisabled ? "Checking..." : "Verify OTP"}
            </button>
          </div>
          </div>
          <div className="timer text-bold text-white">
            {otpTime > 0 && <div>{otpTime} seconds remaining</div>}
          </div>
        </div>
      </div>
      <div id="recaptcha"></div>
    </div>
  );
};

export default Verify;
