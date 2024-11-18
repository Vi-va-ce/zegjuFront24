import styles from "./style";

import TestNav from "./components/TestNav";
import ResultBoard from "./components/ResultBoard";

const App = () => (
<div className="gradient-background unscroll ">

  <div className={` ${styles.paddingX} `}>
        <div className={`${styles.boxWidth}`}>
      <div className="pt-12">
        <TestNav/>
        </div>
      </div>
      </div>

      <div className={`md:ml-64 mb-8`}>
        <div className={``}>
          <ResultBoard/>
           
         
        </div>
      </div>

    </div>
     

    

);