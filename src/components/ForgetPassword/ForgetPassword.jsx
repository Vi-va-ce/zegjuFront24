import React from "react";
import Signupbar from "../Signupbar"

import ForgetPasswordComponent from "./ForgetPasswordComponent";

const ForgetPassword= () => (
<div className="gradient-background h-screen">

      <div>
        <Signupbar/>
      </div>
      <div className='  '>
        <ForgetPasswordComponent/>
            
      </div>

 </div>
     );
     export default ForgetPassword