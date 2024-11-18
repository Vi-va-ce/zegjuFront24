import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNavbar from './Homepage/HomeNavbar';
import Homepage1 from "./Homepage/Homepage1";
import Homepage2 from "./Homepage/Homepage2";
import Homepage3 from "./Homepage/Homepage3";
import Footer from "./Homepage/Footer";
import axios from 'axios';

function HomePagemain({ onSatDataReceived, onFreshDataRecieved }) {
  const [SatData, setSatData] = useState('');
  const [FreshData, setFreshData] = useState('');
  const [scrollMessageReceived, setScrollMessageReceived] = useState(false);
  const [scrollMessageReceived2, setScrollMessageReceived2] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('v4/student/getHomePageData', {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const { data } = response;
        localStorage.setItem('satData', JSON.stringify(data.satData.buttonStatus));
        
        setSatData(data.satData.buttonStatus);
        setFreshData(data.freshCourseData.buttonStatus)
        onFreshDataRecieved(data.freshCourseData.buttonStatus)
        console.log(data.satData.buttonStatus);
        onSatDataReceived(data.satData.buttonStatus); // Pass the SatData to the parent component

        // Store the SAT data in the local storage
       
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);


  useEffect(() => {
    if (scrollMessageReceived) {
      // Scroll to the desired section
      const homepage2Section = document.getElementById('homepage2');
      if (homepage2Section) {
        homepage2Section.scrollIntoView({ behavior: 'smooth' });
        setScrollMessageReceived(false); 
        setScrollMessageReceived2(false);// Reset the scroll message received state
      }
    }
  }, [scrollMessageReceived]);

  const handleScrollMessage = () => {
    if (SatData === 'Continue Preparing') {
      // Navigate to maps
      navigate('/Map'); // Replace '/maps' with the actual URL of the maps page
    } else {
      setScrollMessageReceived(true);
    }
  };
  useEffect(() => {
    if (scrollMessageReceived2) {
      // Scroll to the desired section
      const homepageNewSection = document.getElementById('homepage2');
      if (homepageNewSection) {
        homepageNewSection.scrollIntoView({ behavior: 'smooth' });
        setScrollMessageReceived2(false);// Reset the scroll message received state
      }
    }
  }, [scrollMessageReceived]);

  const handleScrollMessage2 = () => {
    if (FreshData === 'Continue Preparing') {
      // Navigate to maps
      navigate('/Subject_pag2'); // Replace '/maps' with the actual URL of the maps page
    } else {
      setScrollMessageReceived2(true);
    }
  };

  return (
    <div>
      <div className="homepage-background unscroll">
        <div className="">
          <HomeNavbar />
        </div>
        <div className="">
          <Homepage1 />
        </div>
      </div>
      <div className="pb-16">
        <Homepage3 SatData={SatData} FreshData={FreshData} onClickButton={handleScrollMessage} onClickButton2={handleScrollMessage2} />
      </div>
      
      <div className="homepage-background2 pb-8" id="homepage2">
        <Homepage2 SatData={SatData} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePagemain;