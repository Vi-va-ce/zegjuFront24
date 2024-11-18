import React from "react";
import Signupbar from "./Signupbar"
import SignHero from "./SignHero";

const SignupPage = () => (
<div className="gradient-background unscroll ">

      <div>
        <Signupbar/>
      </div>
      <div className={``}>
            <SignHero />
      </div>

 </div>
     

    

);

export default SignupPage;