import React from 'react';
import { Link } from "react-router-dom";

const LoginLinks= () => {
  return (
    <div className='flex flex-col'>
     <Link to="ForgetPassword"> <div className="LoginLink-style hover:underline mb-2">Forget Password</div></Link> 
     <Link to="/Otp"> <div className="LoginLink-style hover:underline mb-2 ml-2">Create Account</div></Link> 
     <Link to='/Help'>
      <div className="LoginLink-style hover:underline mb-2 ml-16">Help</div>
      </Link>
    </div>
  );
};

export default LoginLinks