import React, { createContext,useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Auth from "./components/Auth";
import Footer2 from "./components/Footer/Footer2";
import DefaultPage from "./components/DefaultPage";
import HomePagemain from "./components/HomePagemain";

import DMathc from "./components/ExamPages/DiagnosticExam/DMathWithCalculator/DMathc";
import Devidence from "./components/ExamPages/DiagnosticExam/DEvidenceBasedReading/Devidence";
import Dmathnc from "./components/ExamPages/DiagnosticExam/DMathWithNoCalculator/Dmathnc";
import Dwriting from "./components/ExamPages/DiagnosticExam/DWritingAndLanguage/Dwriting";

import Pevidence from "./components/ExamPages/PracticeExam/PEvidenceBasedReading/Pevidence";
import Pmath from "./components/ExamPages/PracticeExam/PMathWithCalculator/Pmath";
import Pnmath from "./components/ExamPages/PracticeExam/PMathWithNoCalculator/Pnmath";
import Pwriting from "./components/ExamPages/PracticeExam/PWritingAndLanguage/Pwriting";

import FMathc from "./components/ExamPages/FinalExam/FMathWithCalculator/FMathc";
import Fevidence from "./components/ExamPages/FinalExam/FEvidenceBasedReading/Fevidence";
import Fmathnc from "./components/ExamPages/FinalExam/FMathWithNoCalculator/Fmathnc";
import Fwriting from "./components/ExamPages/FinalExam/FWritingAndLanguage/Fwriting";

import MapApp from "./components/Map/MapApp";
import AccountApp from "./components/Map/AccountApp";
import SignupPage from "./components/SignupPage";
import OtpPage from "./components/OtpPage";
import Success from "./components/OTP/Success";
import LoginPage from "./components/LoginPage";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ForgetPasswordSecond from "./components/ForgetPassword/ForgetPasswordSecond";
import Payment from "./components/Payment/Payment";
import TestComplete from "./components/Messages/TestComplete";
import Aboutus from "./components/About/Aboutus";
import Cookies from "./components/Policy/Cookies";
import Terms from "./components/Policy/Terms";
import ResultPage from "./components/Result/ResultPage";
import DashMain from "./components/Dashboard/DashMain";
import Help from "./components/Help/Help";

import FrontPage from "./components/FrontPage/FrontPage";
import SignUp from "./components/SignUpPage/SignUp";

import Subjects from "./components_second/Subjects/Subjects";
import Practice from "./components_second/Practice/Practice";
import PracticePro from "./components_second/Practice Pro/PracticePro";
import Subjects2 from "./components_second/Subjects/Subjects2";
import Foooter from "./components/FrontPage/Foooter";
import Black from "./components/FrontPage/Footers/Black";
import Login from "./components/Login/Login";
import National_Front from "./components/GAT/National_Front";
import TestMode from "./components/GAT/TestMode";
import Practices from "./components/GAT/Practice/Practice";
import Exam from "./components/GAT/Exam/Exam";
import ShowResut from "./components/GAT/Exam/ShowResut";
import Notes from "./components_second/Notes/Notes";
import NotesPro from "./components_second/NotesPro/NotesPro";

import FinalMid from "./components_second/FinalMid/FinalMids";
import Uni from "./components_second/FinalMid/Uni";
import Exampage from "./components_second/FinalMid/Exampage";
import ChoicMatchShort from "./components_second/FinalMid/ChoicMatchShort";

import Basics2 from './components_second/Basic/Basics2'
import Basics from './components_second/Basic/Basics'

import Standard2 from './components_second/Standard/Standard2'
import FinalMids from "./components_second/FinalMid/FinalMids";
import Basic from "./components/FrontPage/Courses/Freshman/Basic";

import Notez from "./components_second/Notez/Notez";
import Standard from "./components_second/Standard/Standard";
import Practize from "./components_second/Practize/Practize";
import FinalMidz from "./components_second/FinalMidz/FinalMidz";
import Payamentmain from "./components_second/Payment/paymentmain";
import Cancel from "./components_second/Payment/Cancel";
import Errors from "./components_second/Payment/Error";
import Successs from "./components_second/Payment/Successs";
import National_Front2 from "./components/GAT/National_Front2";
import TestMode2 from "./components/GAT/TestMode2";
import Practice2 from "./components/GAT/Practice/Practice2";
import Exam2 from "./components/GAT/Exam/Exam2";
import SignUp2 from "./components/SignUpPage/SignUp2";
import National_Fronts from "./components/UAT/National_Fronts";
import National_Fronts2 from "./components/UAT/National_Fronts2";
import TestModes from "./components/UAT/TestModes";
import TestModes2 from "./components/UAT/TestModes2";
import PracticeUAT from "./components/UAT/Practice/PracticeUAT";
import Practice2UAT from "./components/UAT/Practice/Practice2UAT";
import ShowResutUAT from "./components/UAT/Exam/ShowResutUAT";
import Exam2UAT from "./components/UAT/Exam/Exam2UAT";
import ExamUAT from "./components/UAT/Exam/ExamUAT";
import ChapaFrontEnd from "./components_second/Payment2/ChapaFrontEnd";
import PaymentChoose from "./components_second/Payment/PaymentChoose";

import LogoutNotification from "./components/LogoutNotification"; // Add this import
import NotesPrem from "./components_second/NotesPrem/NotesPrem";

import HuPromo from "./components_second/Promo/HuPromo";
import PromotersList from "./PromoCode/PromotersList";
import PromoLogin from "./PromoCode/PromoLogin";
import StudentList from "./PromoCode/StudentList";


import FileUploadForm from "./components_second/Payment/FileUploadForm";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomepage = location.pathname === "/HomePage" || location.pathname === "/";

  const [loginStatus, setLoginStatus] = useState(false);
  const [satData, setSatData] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSubject2, setSelectedSubject2] = useState(null);
  const [selectedSubject3, setSelectedSubject3] = useState(null);
  const [selectedSubject4, setSelectedSubject4] = useState(null);
  const [practiceData, setPracticeData] = useState(null);
  const [practiceData2, setPracticeData2] = useState(null);
  const [practiceData3, setPracticeData3] = useState(null);
  const [practiceData4, setPracticeData4] = useState(null);
  const [examResult, setExamResult] = useState(null); 
  const [examResultUAT, setExamResultUAT] = useState(null); 
  const [selectedSubjects, setSelectedSubjects] = useState(localStorage.getItem('selectedSubject'));

  const handleSubjectSelection = (subject) => {
    setSelectedSubject(subject);
    navigate(`/GAT/TestMode`, { state: { subject } });
  };
  const handleSubjectSelection2 = (subject) => {
    setSelectedSubject2(subject);
    navigate(`/GAT/TestMode2`, { state: { subject } });
  };
  const handleSubjectSelection3 = (subject) => {
    setSelectedSubject3(subject);
    navigate(`/UAT/TestModes`, { state: { subject } });
  };
  const handleSubjectSelection4 = (subject) => {
    setSelectedSubject4(subject);
    navigate(`/UAT/TestModes2`, { state: { subject } });
  };

  const handleLoginSuccess = () => {
    setLoginStatus(true);
  };

  

  const handlePracticeData = (data) => {
    setPracticeData(data);
  };
  const handlePracticeData2 = (data) => {
    setPracticeData2(data);
  };

  const handlePracticeData3 = (data) => {
    setPracticeData3(data);
  };
  const handlePracticeData4 = (data) => {
    setPracticeData4(data);
  };

  const handleExamResult = (result) => {
    setExamResult(result);
    navigate('/GAT/TestMode/Exam/Result');
  };
  const handleExamResultUAT = (result) => {
    setExamResultUAT(result);
    navigate('/UAT/TestModes/Exam/ResultUAT');
  };
  const handleNoteButtonClick = (subject) => {
    setSelectedSubjects(subject);
    localStorage.setItem('selectedSubject', subject);
  };

  const handlePracticeButtonClick = (subject) => {
    setSelectedSubjects(subject);
    localStorage.setItem('selectedSubject', subject);
  };

  const handleExamButtonClick = (subject) => {
    setSelectedSubjects(subject);
    localStorage.setItem('selectedSubject', subject);
  };


  return (
    <div className="unscroll">
      <LogoutNotification /> {/* Add this component */}
     
      <Routes>

        <Route path="/" element={<FrontPage />} />
        <Route path="/Payment" element={<Auth><PaymentChoose /></Auth>} />
        <Route path="/Arif" element={<Auth><Payamentmain /></Auth>} />
        <Route path="/Chapa" element={<Auth><ChapaFrontEnd /></Auth>} />
      
      
        <Route path="/Prlogin" element ={<PromoLogin/>}/>
        <Route path="/HuPromo" element={<HuPromo/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUp2" element={<SignUp2 />} />
        
       
        <Route path="/PL" element={<Auth><PromotersList/></Auth>}/>
        <Route path="/studentlist" element={<Auth><StudentList/></Auth>}/>
        <Route path="/Error" element={<Auth><Errors /></Auth>} />
        <Route path="/Cancel" element={<Auth><Cancel /></Auth>} />
        <Route path="/Success" element={<Auth><Successs /></Auth>} />
        <Route path="/SignIn" element={<Login />} />
        <Route path='/UAT' element={<Auth><National_Fronts onSubjectSelect={handleSubjectSelection3} /></Auth>} />
        <Route path='/UAT2' element={<National_Fronts2 onSubjectSelect={handleSubjectSelection4} />} />
        <Route path='/UAT/TestModes' element={<Auth><TestModes subject={selectedSubject3} onPracticeData={handlePracticeData3} /></Auth>} />
        <Route path='/UAT/TestModes2' element={<TestModes2 subject={selectedSubject4} onPracticeData={handlePracticeData4} />} />
        <Route path='/UAT/TestModes/practice' element={<Auth><PracticeUAT data={practiceData3} /></Auth>} />
        <Route path='/UAT/TestModes2/practice2' element={<Practice2UAT data={practiceData4} />} />
        <Route path='/UAT/TestMode/Exam' element={<Auth><ExamUAT data={practiceData3} onResult={handleExamResultUAT} /></Auth>} />
        <Route path='/UAT/TestMode2/Exam2' element={<Exam2UAT data={practiceData4} onResult={handleExamResultUAT} />} />
        <Route path='/UAT/TestModes/Exam/ResultUAT' element={<ShowResutUAT result={examResultUAT} />} />
        <Route path='/GAT' element={<Auth><National_Front onSubjectSelect={handleSubjectSelection} /></Auth>} />
        <Route path='/GAT2' element={<National_Front2 onSubjectSelect={handleSubjectSelection2} />} />
        <Route path='/GAT/TestMode' element={<Auth><TestMode subject={selectedSubject} onPracticeData={handlePracticeData} /></Auth>} />
        <Route path='/GAT/TestMode2' element={<TestMode2 subject={selectedSubject2} onPracticeData={handlePracticeData2} />} />
        <Route path='/GAT/TestMode/practice' element={<Auth><Practices data={practiceData} /></Auth>} />
        <Route path='/GAT/TestMode/practice2' element={<Practice2 data={practiceData2} />} />
        <Route path='/GAT/TestMode/Exam' element={<Auth><Exam data={practiceData} onResult={handleExamResult} /></Auth>} />
        <Route path='/GAT/TestMode/Exam2' element={<Exam2 data={practiceData2} onResult={handleExamResult} />} />
        <Route path='/GAT/TestMode/Exam/Result' element={<ShowResut result={examResult} />} />
        <Route path="/Otp" element={<OtpPage />} />
        <Route path="/Login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/SignIn/Forgetpassword" element={<ForgetPassword />} />
        <Route path="/About" element={<Aboutus />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/Terms" element={<Terms />} />
      
        <Route path="/Map" element={<Auth><MapApp /></Auth>} />
        <Route path="/Account" element={<Auth><AccountApp /></Auth>} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Login/Forgetpassword/ForgetPasswordSecond" element={<ForgetPasswordSecond />} />
       
        <Route path="/TestComplete" element={<Auth><TestComplete /></Auth>} />
        <Route path="/TestComplete/Result" element={<Auth><ResultPage /></Auth>} />
        <Route path="/Dashboard" element={<Auth><DashMain /></Auth>} />
        <Route path="/DMath" element={<Auth><DMathc /></Auth>} />
        <Route path="/Devidence" element={<Auth><Devidence /></Auth>} />
        <Route path="/Dmathnc" element={<Auth><Dmathnc /></Auth>} />
        <Route path="/Dwriting" element={<Auth><Dwriting /></Auth>} />
        <Route path="/Pevidence" element={<Auth><Pevidence /></Auth>} />
        <Route path="/Pmath" element={<Auth><Pmath /></Auth>} />
        <Route path="/Pnmath" element={<Auth><Pnmath /></Auth>} />
        <Route path="/Pwriting" element={<Auth><Pwriting /></Auth>} />
        <Route path="/Fevidence" element={<Auth><Fevidence /></Auth>} />
        <Route path="/FMathc" element={<Auth><FMathc /></Auth>} />
        <Route path="/Fmathnc" element={<Auth><Fmathnc /></Auth>} />
        <Route path="/Fwriting" element={<Auth><Fwriting /></Auth>} />
        <Route path="/payment" element={<Auth><Payment /></Auth>} />
        <Route path="/Subject_page" element={<Subjects />} />
        <Route path="/Subject_page2" element={<Auth><Subjects2 onNoteButtonClick={handleNoteButtonClick} onPracticeButtonClick={handlePracticeButtonClick} onExamButtonClick={handleExamButtonClick} /></Auth>} />
        <Route path="/Standard2" element={<Auth><Standard2 onNoteButtonClick={handleNoteButtonClick} onPracticeButtonClick={handlePracticeButtonClick} onExamButtonClick={handleExamButtonClick} /></Auth>} />
        <Route path="/Basics2" element={<Auth><Basics2 onNoteButtonClick={handleNoteButtonClick} onPracticeButtonClick={handlePracticeButtonClick} onExamButtonClick={handleExamButtonClick} /></Auth>} />
        <Route path="/Basics" element={<Basics onNoteButtonClick={handleNoteButtonClick} onPracticeButtonClick={handlePracticeButtonClick} onExamButtonClick={handleExamButtonClick} />} />
        <Route path="/Standard" element={<Standard onNoteButtonClick={handleNoteButtonClick} onPracticeButtonClick={handlePracticeButtonClick} onExamButtonClick={handleExamButtonClick} />} />
        <Route path="/FinalMid" element={<Auth><FinalMids subjectName={selectedSubjects} /></Auth>} />
        <Route path="/FinalMidz" element={<Auth><FinalMidz subjectName={selectedSubjects} /></Auth>} />
        <Route path="/Examchoice" element={<Auth><Exampage /></Auth>} />
        <Route path="/Uni" element={<Auth><Uni /></Auth>} />
        <Route path="/ChoiceMatchShort" element={<Auth><ChoicMatchShort /></Auth>} />
        <Route path="/NotesPro" element={<Auth><NotesPro subjectName={selectedSubjects} message="full" /></Auth>} />
        <Route path="/NotesPrem" element={<Auth><NotesPrem subjectName={selectedSubjects} message="full" /></Auth>} />
        <Route path="/Notes" element={<Auth><Notes subjectName={selectedSubjects} message="full" /></Auth>} />
        <Route path="/Notez" element={<Notez subjectName={selectedSubjects} message="full" />} />
        <Route path="/Practize" element={<Practize subjectName={selectedSubjects} />} />
        <Route path="/Practice" element={<Auth><Practice subjectName={selectedSubjects} message="full" /></Auth>} />
        <Route path="/PracticePro" element={<Auth><PracticePro subjectName={selectedSubjects} message="full" /></Auth>} />
        <Route path="/ResultBoard" element={<ResultPage />} />
      </Routes>

  

      {!isHomepage && <Black />}
    </div>
  );
};

export default App;