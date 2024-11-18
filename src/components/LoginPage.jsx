import React from "react";
import Signupbar from "./Signupbar";
import WelcomeHero from "./WelcomeHero"

const LoginPage = ({onLoginSuccess}) => (
<div className="gradient-background  ">

      <div>
        <Signupbar/>
        </div>
        <div className={`md:mt-[-150px] mt-[-10px]`}>
      <WelcomeHero onLoginSuccess ={onLoginSuccess}/>
      </div>


 </div>
     

    

);

export default LoginPage;
