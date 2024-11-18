import styles from "./style";
import TestNav from "./components/TestNav";
import Profile from "./components/Profile";
import DashboardHero from "./components/DashboardHero";


const App = () => (
<div className="">

  <div className={`gradient-backgroundtwo ${styles.paddingX} `}>
        <div className={`${styles.boxWidth}`}>
          <div className="pt-12">
        <TestNav/>
        </div>
        </div>
  <div>
  <Profile/>
  </div>
  </div>
  <div className="dashboard-background">
    <div className={` ${styles.boxWidth}`}>
        <div className="dashboard-hero-container ">
          <DashboardHero/>
           
        </div>   
    </div>
  </div>

    </div>
     

    

);

