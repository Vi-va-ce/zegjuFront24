import styles from "./style";
import HeroDiagnostic from "./components/HeroDiagnostic";
import TestNav from './components/TestNav'
import NavbarDiagnostic from "./components/NavbarDiagnostic";

const App = () => (
<div className=" gradient-background ">
  <div className="">
    <TestNav/>
  </div>

  <div className="unscroll">
    <HeroDiagnostic/>
  </div>
</div>
         
);

export default App