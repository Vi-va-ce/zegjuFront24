import React, { useEffect, useState } from 'react';
import { Rectangle82 } from "../assets";
import Firstboard from './firstboard';
import Secondboard from './Secondboard';
import Secondboard2 from './Secondboard2';
import Pie from './Pie';
import Pie2 from './Pie2';
import Topscore from './Topscore';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ResultBoard() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const [data, setData] = useState(null);
  const [DbuttonClicked, setDButtonClicked] = useState(false);
  const [FbuttonClicked, setFButtonClicked] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint;
        if (FbuttonClicked) {
          endpoint = 'v2/student/finalTestResult';
        } else {
          endpoint = 'v2/student/diagnosticTestResult';
        }
        const response = await axios.post(endpoint);
        console.log(response);
        if (response.data === 'no test result data is found') {
          let errorMessage;
          if (FbuttonClicked) {
            errorMessage = 'You did not do the final exam.';
          } else {
            errorMessage = 'You did not do the diagnostic exam.';
          }
          alert(errorMessage); // Show the appropriate error message using the alert function
        } else {
          setData(response.data);
          setError('');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('No test result data found.'); // Show the error message using the alert function
      }
    };
  
    fetchData();
  }, [FbuttonClicked]);
  const containerStyle = {
    position: 'relative',
    overflow: 'visible',
  };

  const imageStyle = {
    position: 'absolute',
    top: '18px',
    left: -350,
    width: '1000px',
    height: '800px',
  };

  const customBorderStyle = {
    position: 'absolute',
    background: 'rgba(0, 0, 0, 0.01)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  };

  const secondBoardData = {
    satEnglishScore: data?.twoSections?.sat_english?.score || 0,
  };
  
  const secondBoardTwoData = {
    satMathScore: data?.twoSections?.sat_math?.score || 0,
  };
  
  const firstBoardData = {
    subSections: data?.subSections || [],
  };
  
  const mainSectionsData = {
    mainSections: data?.mainSections || [],
  };

  const handleButtonClick = () => {
    setDButtonClicked(true);
    setFButtonClicked(false); // Set FbuttonClicked to false
  };
  
  const handleButtonClicks = () => {
    setFButtonClicked(true);
    setDButtonClicked(false); // Set DButtonClicked to false
  };

  return (
    <div>
      <div className='justify-center items-center pt-8 flex'>
        <div className=''>
        <button
  className={`border-solid border-2 border-grey-600 hover:bg-gray-800 rounded-md w-[104px] md:w-[177px] h-[30px] md:h-[36px] ml-3 ${
    DbuttonClicked || !FbuttonClicked ? 'bg-gray-800' : ''
  }`}
  onClick={handleButtonClick}
>
  <p className='text-teal-50 text-[12px] md:text-[15px]'>Diagnostic Exam</p>
</button>
        </div>
        <button
          className={`border-solid border-2 border-grey-600 hover:bg-gray-800 rounded-md w-[114px] md:w-[177px] h-[30px] md:h-[36px] ml-3 ${
            FbuttonClicked ? 'bg-gray-800' : ''
          }`}
          onClick={handleButtonClicks}
        >
          <p className='text-teal-50 text-[12px]  md:text-[15px]'>Final Exam</p>
        </button>
      </div>



      <div className="" style={containerStyle}>
        <img src={Rectangle82} alt="Rectangle82" style={imageStyle} />
        <div className='custom-container md:w-[905px] md:h-[730px] w-[360px] h-[1200px]  md:rounded-3xl rounded-xl rounded-tl-[31px] rounded-tr-[31px] shadow'>
          <p className='md:p-5 p-2 ml-4 mt-8 text-white md:text-4xl text-[25.51px] font-inter'>Result</p>
          <div className=" md:ml-5 md:w-[870px] md:h-[4px] w-[320px] h-[2px] ml-4 " style={customBorderStyle}></div>
          <div className='md:ml-0.5 ml-4'>
            <Firstboard data={firstBoardData} />
          </div>
          <div className='flex'>
            <div className='md:ml-96 md:pl-12 md-mt  absolute ml-2'>
              <Secondboard data={secondBoardData} />
            </div>
            <div className='md:ml-8 ml-2 absolute'>
              <Secondboard2 data={secondBoardTwoData} />
            </div>
          </div>
          <div className='md:ml-96 md:mt-80 ml-5 mt-[865px] absolute'>

            <Topscore />
          </div>
          <div className='md:mt-80 md:ml-2 ml-7 mt-[570px] shadow'>
            {isMobile ? <Pie2 data={mainSectionsData} /> : <Pie data={mainSectionsData} />}
          </div>
          <Link to='/Dashboard'>
            <button className='flexs md:ml-[390px] ml-[270px]'>
              <div class="w-[75px] h-7 bg-zinc-300 rounded-[40px] md:mt-4 mt-[270px] md:ml-96" >
                <div class="text-indigo-950 text-xl font-semibold font-['Inter']">More</div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResultBoard;