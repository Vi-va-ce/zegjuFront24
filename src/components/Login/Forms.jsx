import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { zege, phon, lock } from '../../assets';

function Forms() {
  const [Phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [PhonenumberError, setPhonenumberError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleFocus = (e) => {
    if (e.target.previousElementSibling) {
      e.target.previousElementSibling.style.display = 'none';
    }
  };

  const handleBlur = (e) => {
    if (e.target.value === '' && e.target.previousElementSibling) {
      e.target.previousElementSibling.style.display = 'block';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setPhonenumberError('');
    setPasswordError('');
    setIsLoading(true);

    // Validate phone number format
    if (!/^0\d{9}$/.test(Phonenumber)) {
      setPhonenumberError('Phone number must start with 0 and be exactly 10 digits.');
      setIsLoading(false);
      return;
    }

    try {
      const { data } = await axios.post('v1/student/logIn', {
        email: Phonenumber,
        password,
      });
      if (data.status === 'Log in success!') {
        Cookies.set('refresh_token', data.refresh_token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
        navigate('/');
      } else if (data === 'incorrect password') {
        setPasswordError('Incorrect password. Please try again.');
      } else if (data === 'No Student is found with the Phone number') {
        setPhonenumberError('No student found with the Phonenumber. Please try again.');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-[361px] md:w-[464px] h-[357px] md:h-[492px] bg-white shadow-[4px_-5px_9.34px_0px_rgba(146,146,146,0.16)] rounded-3xl pl-[40px] pt-[30px]'>
      <div className='flex justify-between items-center'>
        <p className='font-inter text-[24px] md:text-[38px] font-bold'>Login</p>
        <div className='pr-[40px]'>
          <img src={zege} className='w-[60px] md:w-[80px] h-[25px] md:h-[33px]' alt="Zege Logo" />
        </div>
      </div>
      <div className='pt-4 flex'>
        <p className='font-inter text-[16px]'>Need an account? </p>
        <Link to='/SignUp'><p className='text-[rgba(79,0,86,1)]'>Sign up</p></Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="relative mt-4">
          <input
            type="tel"
            id="phoneNumber"
            className="block w-[290px] md:w-[400px] md:h-[40px] h-[32px] rounded-md border border-gray-300 py-1.5 px-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            value={Phonenumber}
            onChange={(e) => setPhonenumber(e.target.value.replace(/\D/, '').slice(0, 10))}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder=" "
          />
          <label
            htmlFor="phoneNumber"
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-opacity duration-300 ${
              Phonenumber ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className='flex'><img src={phon} className='pr-2' alt="User Icon" />phoneNumber</div>
          </label>
      
          {PhonenumberError && <p className="text-red-500 text-sm mt-1 ">{PhonenumberError}</p>}
        </div>
       
        <div className="relative mt-4">
          <input
            type="password"
            id="password"
            className="block w-[290px] md:w-[400px] md:h-[40px] h-[32px] rounded-md border border-gray-300 py-1.5 px-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder=" "
            required
          />
          {passwordError && <p className="text-red-500 text-sm absolute mt-1">{passwordError}</p>}
          <label
            htmlFor="password"
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-opacity duration-300 ${
              password ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className='flex'><img src={lock} className='pr-2' alt="Lock Icon" /> Password</div>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`mt-6 w-[290px] md:w-[400px] md:h-[40px] h-[32px] bg-[rgba(79,0,86,1)] text-white rounded-md ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
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
            'Submit'
          )}
        </button>
      </form>

      <Link to='/SignIn/Forgetpassword'> 
        <div className='flex items-center align-center'>
          <p className='pt-4 text-[rgba(79,0,86,1)]'>Forget Password?</p>
        </div>
      </Link>
    </div>
  );
}

export default Forms;
