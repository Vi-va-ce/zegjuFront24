import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { arif } from '../../assets';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const PaymentForm = () => {
  const navigate = useNavigate();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentData, setPaymentData] = useState({
    paymentMethods: ['TELLEBIRR'],
    phone: '',
    email: '',
    name: '',
    items: [
      {
        name: '',
        quantity: 1,
        price: 0,
        description: '',
        image: '',
      },
    ],
    beneficiaries: [
      {
        accountNumber: '01320811436100',
        bank: 'AWINETAA',
        amount: 0,
      },
    ],
    lang: 'EN',
    cancelUrl: 'https://Zegju.com/cancel',
    successUrl: 'http://Zegju.com/Success',
    errorUrl: 'http://Zegju.com/Error',
    notifyUrl: 'https://zegeju-1453f.uc.r.appspot.com/api/v12/student/paymentCallBack',
  });

  const [countryCode, setCountryCode] = useState('251');
  const [phoneError, setPhoneError] = useState('');
  const [courseInfo, setCourseInfo] = useState({ name: 'FRESHMAN BASIC', price: 149.99 });

  useEffect(() => {
    const buttonStatus = localStorage.getItem('buttonStatus');
    const storedUsername = localStorage.getItem('username');
    let price = 149.99;
    let itemName = 'FRESHMAN BASIC';

    switch (buttonStatus) {
      case 'UAT':
        price = 289.99;
        itemName = 'AAU UAT';
        break;
      case 'Pro':
        price = 289.00;
        itemName = 'FRESHMAN PRO';
        break;
      case 'Prem':
        price = 359.00;
        itemName = 'FRESHMAN PREMIUM';
        break;
      case 'GAT':
        price = 449.99;
        itemName = 'GAT';
        break;
      case 'EAA':
        price = 500;
        itemName = buttonStatus === 'EAA';
        break;
      case 'SAT':
        price = 750;
        itemName = 'SAT';
        break;
      case 'IELTS':
        itemName = 'IELTS';
        break;
      case 'MAT':
        itemName = 'MATRIC';
        break;
      case 'TOEFL':
        itemName = 'TOEFL';
        break;
      default:
        price = 219.00;
        itemName = 'FRESHMAN BASIC';
        break;
    }

    // Check for promo code in local storage
    const promoCode = localStorage.getItem('promoCode');
    if (promoCode === 'HU2017') {
      price *= 0.9; // Apply 10% discount
    }

    setCourseInfo({ name: itemName, price });

    setPaymentData((prevData) => ({
      ...prevData,
      name: storedUsername || '',
      items: [{
        ...prevData.items[0],
        name: itemName,
        price,
      }],
      beneficiaries: [{
        ...prevData.beneficiaries[0],
        amount: price * prevData.items[0].quantity,
      }],
    }));

    const signupStatus = localStorage.getItem('signupStatus');
    setIsSignedUp(signupStatus === 'true');
  }, []);

  const generateNonce = () => uuidv4();

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[97]\d{8}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      if (validatePhoneNumber(value)) {
        setPhoneError('');
      } else {
        setPhoneError('Phone number must start with 9 or 7 and have 9 digits.');
      }
    }

    setPaymentData((prevData) => ({
      ...prevData,
      [name]: name === 'paymentMethods' ? [value] : value,
    }));
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const initiatePayment = (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(paymentData.phone)) {
      setPhoneError('Please enter a valid phone number.');
      return;
    }

    setIsLoading(true); // Start loading

    const nonce = generateNonce();
    const fullPhoneNumber = `+${countryCode}${paymentData.phone}`;
    const requestData = { ...paymentData, phone: fullPhoneNumber, nonce };

    axios.post('v12/student/payment', requestData, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log('Payment successful:', response);
      window.location.href = response.data;
    })
    .catch(error => {
      console.error('Payment error:', error.response ? error.response.data : error.message);
    })
    .finally(() => {
      setIsLoading(false); // Stop loading
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className='bg-white md:w-[726px] w-[90%] md:h-[70px] h-[50px] flex items-center justify-center'>
        <p className='md:text-[28px] text-[18px] font-mulish font-semibold'>Payment Method</p>
      </div>

      <div className='p-4'>
        <img src={arif} className='w-[173px] h-[38px]' alt='Arif logo' />
      </div>

      <div className='md:w-[736px] w-[90%] bg-white shadow-md rounded-md'>
        <form onSubmit={initiatePayment} className="p-6 flex flex-col items-center">
          <div className="mb-4 w-full">
            <label htmlFor="paymentMethod" className="block text-gray-700 font-medium mb-2">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethods"
              value={paymentData.paymentMethods[0]}
              onChange={handleChange}
              className="w-full md:h-[56px] h-[44px] p-2 border border-gray-300 rounded-md"
            >
              <option value="TELLEBIRR">TELLEBIRR</option>
              <option value="CBE">CBE</option>
            </select>
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <div className="flex relative">
              <select
                value={countryCode}
                onChange={handleCountryCodeChange}
                className="md:w-[100px] w-[80px] p-2 border border-gray-300 rounded-l-md"
              >
                <option value="251">+251</option>
              </select>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={paymentData.phone}
                onChange={handleChange}
                className={`md:w-[590px] w-[248px] md:h-[56px] h-[38px] p-2 border ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-r-md pr-10`}
                placeholder="xxxxxxxxx"
                required
              />
              <FaPhone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>
            {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={paymentData.email}
                onChange={handleChange}
                className="w-full md:h-[56px] h-[44px] p-2 border border-gray-300 rounded-md pr-10"
                placeholder="you@example.com"
                required
              />
              <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>
          </div>

          <div className="p-2 md:w-[736px] w-[337px] h-[40px] bg-black text-white text-center">
            <p className="text-[16px] font-semibold">
              {courseInfo.name} - {courseInfo.price.toFixed(2)} Birr
            </p>
          </div>

          <button
            type="submit"
            onClick={initiatePayment}
            className="md:w-[736px] w-[90%] mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
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
  );
};

export default PaymentForm;