import React from "react";
import styles from "../../style";
import TestNav from "../TestNav";
import Profile from "./Profile"
import DashboardHero from "./DashboardHero";


const DashMain= () => (  <div className="gradient-background unscroll ">

<div className={`${styles.paddingX}`}>
  <div className={`${styles.boxWidth}`}>
    <div className="pt-4 md:pt-2">
      <TestNav/>
    </div>
  </div>
</div>

  <div className="bg-blue-200">
    
      
          <DashboardHero/>
           
        </div>   
  

    </div>
     

    

);

export default DashMain

