import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation to access the passed state
import { backb } from '../../assets';
import Years from './Years';

function Exampage() {
  const location = useLocation();
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (location.state && location.state.data) {
      setExams(location.state.data); // Access the exams data passed from List
      setLoading(false); // Set loading to false once data is received
    }
  }, [location]);

 
  return (
    <div className='bg-[#ecf7f8] min-h-screen'>
      <Link to='/Finalmid'>
        <button className='pl-[12px] pt-[12px] transition-transform duration-300 hover:scale-110'>
          <img src={backb} alt="Back" />
        </button>
      </Link>
      <div className='pt-[100px] md:pt-[0px] flex items-center justify-center pb-52'>
        <div>
          <Years exams={exams} /> {/* Pass the exams data to Years component */}
        </div>
      </div>
    </div>
  );
}

export default Exampage;
