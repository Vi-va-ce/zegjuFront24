import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { eth, gradi, int, rect } from '../../assets';
import UAT from './Courses/UAT';
import GAT from './Courses/GAT';
import Eaa from './Courses/Eaa';
import Ielts from './Courses/Ielts';
import Sat from './Courses/Sat';
import Tofel from './Courses/Tofel';
import Basic from './Courses/Freshman/Basic';
import Pro from './Courses/Freshman/Pro';
import Prem from './Courses/Freshman/Prem';
import axios from 'axios';
import Loader from '../../Loader';
function Exams() {
  const navigate = useNavigate();
  const [BasicButtonStatus, setBasicButtonStatus] = useState('');
  const [PremiumButtonStatus, setPremiumButtonStatus] = useState('');
  const [ProButtonStatus, setProButtonStatus] = useState('');
  const [EaaButtonStatus, setEaaButtonStatus] = useState('');
  const [GatButtonStatus, setGatButtonStatus] = useState('');
  const [UatButtonStatus, setUatButtonStatus] = useState('');
  const [SatButtonStatus, setSatButtonStatus] = useState('');
 
  const [loading, setLoading] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const [BasicpriceStatus, setBasicpriceStatus] = useState('');
  const [PremiumpriceStatus, setPremiumpriceStatus] = useState('');
  const [Propricetatus, setPropriceStatus] = useState('');
  const [GatpriceStatus, setGatpriceStatus] = useState('');

  useEffect(() => {
    const hasRefreshToken = document.cookie.includes('refresh_token');
    console.log(`Has refresh token: ${hasRefreshToken}`);

    if (hasRefreshToken && !dataFetched) {
      setLoading(true);
      (async () => {
        try {
          const response = await axios.get('v4/student/getHomePageData', {
            headers: {
              'Content-Type': 'application/json',
            },
          });
        
          const { data } = response;
         

          if (data && data.freshCourseData && data.eaaData && data.gatData && data.uatData  && data.satData) {
            setBasicButtonStatus(data.freshCourseData.basicButtonStatus);
            setPremiumButtonStatus(data.freshCourseData.premiumButtonStatus);
            setProButtonStatus(data.freshCourseData.proButtonStatus);
            setEaaButtonStatus(data.eaaData.buttonStatus);
            setGatButtonStatus(data.gatData.buttonStatus);
            setUatButtonStatus(data.uatData.buttonStatus);
            setSatButtonStatus(data.satData.buttonStatus);
            setBasicpriceStatus(data.freshCourseData.basicPrice)
            setPremiumpriceStatus(data.freshCourseData.premiumPrice)
            setPropriceStatus(data.freshCourseData.proPrice)
            setGatpriceStatus(data.gatData.gatPrice);
            
            

            setLoading(false);
            setDataFetched(true);
          } else {
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      })();
    }
  }, [dataFetched]);

  const handleNavigate = (status, path) => {
    localStorage.setItem('buttonStatus', status);
    navigate(path);
  };

  const handleEnroll = (status, component) => {
    const hasRefreshToken = document.cookie.includes('refresh_token');
    localStorage.setItem('buttonStatus', component);

    if (hasRefreshToken) {
      navigate('/payment');
    } else {
      navigate('/SignUp');
    }
  };

  const handleScrollMessage = () => {
    navigate('/Basics2');
  };

  const handleScrollMessage2 = () => {
    navigate('/Subject_page2');
  };

  const handleScrollMessage3 = () => {
    navigate('/Standard2');
  };

  const handleScrollMessage4 = () => {
    navigate('/');
  };

  const handleScrollMessage5 = () => {
    navigate('/GAT');
  };
  const handleScrollMessage6 = () => {
    navigate('/UAT');
  };
  const handleScrollMessage8 = () => {
    navigate('/Map');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div><Loader /></div>
      </div>
    );
  }

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='bg-white w-[1078px] h-[600px] mt-4'>
          <div className='flex justify-center items-center pt-3 md:pt-12'>
            <img src={gradi} className='w-[15px] md:w-[40px] h-[15px] md:h-[40px]'></img>
            <p className='text-[28x] md:text-[34px] font-semibold text-[#8e3a95] font-mulish pl-2 md:pl-4'>
              Freshman Course
            </p>
          </div>
          <div className='pt-4 md:pt-12 pb-4 md:flex justify-center items-center'>
            <div className='flex justify-center items-center space-x-4 md:space-x-8'>
              <div className=''><Basic BasicButtonStatus={BasicButtonStatus}  BasicpriceStatus={BasicpriceStatus} onClickButton={BasicButtonStatus === 'Continue Preparing' ? handleScrollMessage : () => handleEnroll(BasicButtonStatus, 'Basic')} /></div>
              <div className=''><Pro ProButtonStatus={ProButtonStatus} PropriceStatus={Propricetatus} onClickButton={ProButtonStatus === 'Continue Preparing' ? handleScrollMessage3 : () => handleEnroll(ProButtonStatus, 'Pro')} /></div>
              <div className='hidden md:block'><Prem PremiumButtonStatus={PremiumButtonStatus} PremiumpriceStatus={PremiumpriceStatus} onClickButton={PremiumButtonStatus === 'Continue Preparing' ? handleScrollMessage2 : () => handleEnroll(PremiumButtonStatus, 'Prem')} /></div>
            </div>
            <div className='flex justify-center items-center pt-4 space-x-4'>
              <div className='md:hidden'><Prem PremiumButtonStatus={PremiumButtonStatus} PremiumpriceStatus={PremiumpriceStatus} onClickButton={PremiumButtonStatus === 'Continue Preparing' ? handleScrollMessage2 : () => handleEnroll(PremiumButtonStatus, 'Prem')} /></div>
              <div className='pr-[150px] md:hidden'><img src={rect}></img></div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center pt-3 md:pt-12'>
        <img src={eth} className='w-[15px] md:w-[40px] h-[15px] md:h-[40px]'></img>
        <p className='text-[16px] md:text-[34px] font-semibold text-[#c23fcd] font-mulish pl-2'>
          National Exams
        </p>
      </div>
      <div className='pt-4 md:pt-12 md:flex justify-center items-center'>
        <div className='flex justify-center items-center space-x-4 md:space-x-12'>
          <div className=''><UAT UatButtonStatus={UatButtonStatus} onClickButton={UatButtonStatus === 'Continue Preparing' ? handleScrollMessage6 : () => handleEnroll(UatButtonStatus, 'UAT')}  /></div>
          <div className=''><GAT GatButtonStatus={GatButtonStatus}  GatpriceStatus={GatpriceStatus}  onClickButton={GatButtonStatus === 'Continue Preparing' ? handleScrollMessage5 : () => handleEnroll(GatButtonStatus, 'GAT')} /></div>
          <div className='hidden md:block'><Eaa EaaButtonStatus={EaaButtonStatus} onClickButton={EaaButtonStatus === 'Continue Preparing' ? handleScrollMessage4 : () => handleEnroll(EaaButtonStatus, 'Eaa')} /></div>
        </div>
        <div className='flex justify-center items-center pt-8 space-x-4'>
          <div className='md:hidden'><Eaa EaaButtonStatus={EaaButtonStatus} onClickButton={EaaButtonStatus === 'Continue Preparing' ? handleScrollMessage4 : () => handleEnroll(EaaButtonStatus, 'Eaa')} /></div>
        </div>
      </div>

      <div className='flex justify-center items-center pt-3 md:pt-12'>
        <img src={int} className='w-[15px] md:w-[40px] h-[15px] md:h-[40px]'></img>
        <p className='text-[16px] md:text-[34px] font-semibold text-[#c23fcd] font-mulish pl-2'>
          International Exams
        </p>
      </div>
      <div className='pt-4 md:pt-12 md:flex justify-center items-center'>
        <div className='flex justify-center items-center space-x-4 md:space-x-12'>
          <div className=''><Ielts /></div>
          <div className=''><Sat SatButtonStatus={SatButtonStatus} onClickButton={SatButtonStatus === 'Continue Preparing' ? handleScrollMessage8 : () => handleEnroll(SatButtonStatus, 'SAT')}   /></div>
          <div className='hidden md:block'><Tofel /></div>
        </div>
        <div className='flex justify-center items-center pt-4 space-x-4'>
          <div className='md:hidden'><Tofel /></div>
          <div className='pr-[150px] md:hidden'><img src={rect}></img></div>
        </div>
      </div>

      <div className='pt-4 md:pt-[75px]'>
        <p className='font-mulish text-center text-[12px] md:text-[24px]'>
          Achieving a high score on the TOEFL or IELTS is essential <br className='md:hidden' />
          for studying <br className='hidden md:block' /> abroad. Our preparation tools are designed <br className='md:hidden' />
          to improve your language skills and boost your <br className='hidden md:block' /> confidence.
        </p>
      </div>
    </div>
  );
}

export default Exams;