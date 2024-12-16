import React, { useContext,useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { arif, backb, chapas } from '../../assets';
import Loader from '../../Loader';





function ChapaFrontEnd() {
  
  const [data, setData] = useState([]);
  const [loadings, setLoadings] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('v4/student/getHomePageData');
      setData(response);
     
    } catch (error) {
      
    } finally {
      setLoadings(false);
    }
    
  };
  const [formData, setFormData] = useState({
    amount: '',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    if (!data || !data.data) return;
    const buttonStatus = localStorage.getItem('buttonStatus');
    let price =data.data.freshCourseData.basicPrice;

    let name = 'FRESHMAN BASIC';

    switch (buttonStatus) {
      case 'UAT':
        price =  data.data.uatData.price;
        name = 'AAU UAT';
        break;
      case 'Pro':
        price =data.data.freshCourseData.proPrice;
        name = 'FRESHMAN PRO';
        break;
      case 'Prem':
        price = data.data.freshCourseData.premiumPrice;
        name = 'FRESHMAN PREMIUM';
        break;
      case 'GAT':
        price =  data.data.gatData.price;
        name = 'GAT';
        break;
      case 'EAA':
        price =  data.data.eaaData.price;
        name = 'EAA';
        break;
      case 'SAT':
        price = 750;
        name = 'SAT';
        break;
      case 'IELTS':
        name = 'IELTS';
        break;
      case 'MAT':
        name = 'MATRIC';
        break;
      case 'TOEFL':
        name = 'TOEFL';
        break;
      default:
        price =  data.data.freshCourseData.basicPrice;
        name = 'FRESHMAN BASIC';
        break;
    }

    setFormData((prevData) => ({ ...prevData, amount: price.toFixed(2) }));
    setItemName(name);
  },  [data]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhoneNumber = (number) => {
    return /^0[79]\d{8}$/.test(number);
  };

  const generateNonce = () => uuidv4();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(formData.phone_number)) {
      setError('Phone number must start with 09 or 07 and be 10 digits long.');
      return;
    }

    setError('');
    setIsLoading(true);

    const paymentData = {
      amount: formData.amount,
      currency: 'ETB',
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone_number: formData.phone_number,
      tx_ref: generateNonce(),
      callback_url: 'https://zegeju-1453f.uc.r.appspot.com/api/v14/student/paymentCallBack',
      return_url: 'https://zegju.com/',
      "customization[title]": itemName,
      "customization[description]": 'I love online payments.',
    };

    console.log('Sending the following data to the API:', paymentData);

    try {
      const response = await axios.post(
        'https://zegeju-1453f.uc.r.appspot.com/api/v14/student/payment',
        paymentData
      );
      window.location.href = response.data;
    } catch (error) {
      console.error('Error initializing payment:', error);
      setError('There was an error processing your payment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  if (loadings  || !data) {
    return <div className="flex items-center justify-center min-h-screen">
    <Loader />
  </div> // Display loading message
  }
  return (
    <div className='bg-gray-100'>
      <div className='flex'>
        <Link to='/payment'>
          <button className='pl-[12px] pt-[12px] transition-transform duration-300 hover:scale-110'>
            <img src={backb} alt='Back' />
          </button>
        </Link>
      </div>
      <div className="min-h-screen flex items-center justify-center pb-[200px] md:pb-[100px]">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <div className='flex items-center justify-center'>
            <div>
              <p className='md:text-[28px] text-[18px] font-mulish font-semibold'>Payment Method</p>
              <div className='p-4'>
                <img src={chapas} className='w-[173px] h-[38px]' alt='chapas' />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              readOnly
              className="w-full p-2 border border-gray-300 rounded"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"
                  ></path>
                </svg>
              ) : (
                'Initiate Payment'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChapaFrontEnd;