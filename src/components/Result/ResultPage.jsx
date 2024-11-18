import React from "react";
import styles from "../../style";
import TestNav from "../TestNav";
import ResultBoard from '../../components/ResultBoard'

const ResultPage = () => (
  <div className="gradient-background unscroll ">

    <div className={`${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="pt-4 md:pt-2">
          <TestNav/>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center flex-grow pb-8">
      <ResultBoard/>
    </div>

  </div>
);

export default ResultPage;