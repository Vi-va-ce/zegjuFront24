import styles from "./style";
import TestBody from "./components/TestBody";
import TestNav from "./components/TestNav";

const App = () => (
<div className="unscroll ">

  <div className={`gradient-backgroundtwo ${styles.paddingX} `}>
        <div className={`${styles.boxWidth}`}>
          <div className="">
        <TestNav/>
        </div>
        </div>
  </div>
  <div className="test-background ">
    <div className={`mr-36 ${styles.boxWidth}`}>
        <div className="">
           <TestBody/>
        </div>   
    </div>
  </div>

    </div>
     

    

);

