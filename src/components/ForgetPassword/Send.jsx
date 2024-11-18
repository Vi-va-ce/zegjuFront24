import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { addPhoneNumber, addUser, changeStateFalse } from "./OtpSlice";
import toast from "react-hot-toast";

const Send = ({ onPhoneSubmit }) => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [recaptcha, setRecaptcha] = useState(null);
  const [showCaptcha, setShowCaptcha] = useState(true);

  useEffect(() => {
    let recaptchaVerifier;
    recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
    });
    setRecaptcha(recaptchaVerifier);
  }, []);

  const handleFocus = (e) => {
    e.target.previousElementSibling.style.display = "none";
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.previousElementSibling.style.display = "block";
    }
  };

  const sendOTP = async () => {
    if (phone === "") {
      toast.error("Please enter a phone number");
      return;
    }

    if (isButtonDisabled) {
      return;
    }

    try {
      setIsButtonDisabled(true);
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+" + phone,
        recaptcha
      );

      toast.success("OTP sent successfully");
      dispatch(addUser(confirmation));
      dispatch(addPhoneNumber(phone));
      dispatch(changeStateFalse());
      setShowCaptcha(false);

      // Pass the phone number to the parent component
      onPhoneSubmit(phone);
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

  return (
    <div className="flex">
      <div className="">
        <div className="phone-container">
          <div className="">
            <div className="form-field">
              <PhoneInput
                country={"et"}
                value={phone}
                onChange={setPhone}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="+251 xxxxx-xxxxx"
                className="p-2"
              />
            </div>
            <div className="flex justify-center items-center mt-8">
              <button
                onClick={() => sendOTP()}
                id="signup-btn"
                disabled={isButtonDisabled}
                className="signuppage-layout signup-button"
              >
                <span>{isButtonDisabled ? "Sending..." : "Send SMS"}</span>
              </button>
            </div>
          </div>
        </div>

        {showCaptcha && <div id="recaptcha" className=""></div>}
      </div>
    </div>
  );
};

export default Send;