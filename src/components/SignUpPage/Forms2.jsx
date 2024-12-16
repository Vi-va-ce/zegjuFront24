import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { zege, user, phon, school, lock, check } from '../../assets';

const publicUniversities = [
  "AA SCI. & TECH UNIVERSITY",
  "Adama science & technology University",
  "Addis Ababa University",
  "Adigrat University",
  "Ambo University",
  "Arba Minch University",
  "Arsi University",
  "ASOSSA UNIVERSITY",
  "Axum University",
  "Bahir Dar University",
  "BONGA UNIVERSITY",
  "BULE HORRA UNIVERSITY",
  "DEBARK UNIVERSITY",
  "Debrebirhan University",
  "Debremarkos University",
  "DEBRETABOR UNIVERSITY",
  "DEMBI DOLO UNIVERSITY",
  "Dilla University",
  "Dire Dawa University",
  "Gambella University",
  "Gondar University",
  "Haramaya University",
  "Hawassa University",
  "Injibara University",
  "Jigjiga University",
  "Jimma University",
  "Jinka University",
  "Kebri Dehar University",
  "Kotebe Metropolitan University",
  "Madda Walabu University",
  "Mekelle University",
  "Mekdela Amba University",
  "Mettu University",
  "Mizan-Tepi University",
  "Oda Bultum",
  "Raya University",
  "Selale University",
  "Semera University",
  "Wachamo University",
  "Wolkite University",
  "Werabe University",
  "Wolayita Sodo University",
  "Woldiya University",
  "Wollega University",
  "Wollo University",
  "Borena University"
];

const privateUniversities = [
  "Admas University",
  "Addis Ababa Medical University College",
  "Addis Continental Institute of Public Health",
  "Africa Beza University College",
  "Alpha University College",
  "Bethel Medical College",
  "Ethiopian Graduate School of Theology",
  "Hope University College",
  "Microlink Information Technology College",
  "New Generation University College",
  "Rift Valley University",
  "St. Mary's University",
  "Unity University",
  "Zion Colleges",
  "Sante Medical College",
  "Lorkan International College",
  "Royal University College",
  "CPU College",
  "Rany Institute of Technology",
  "Mekane Yesus Management and Leadership College",
  "Alpha University College"
];

function Forms2() {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    university: '',
    password: '',
    confirmPassword: '',
    promoCode: ''
  });

  const [errors, setErrors] = useState({
    passwordMatch: true,
    phoneNumber: '',
    formCompletion: '',
    promoCode: ''
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailExistsError, setEmailExistsError] = useState('');
  const [promoError, setPromoError] = useState('');
  const [nameExistsError, setNameExistsError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const { username, phoneNumber, university, password, confirmPassword } = formData;
    const allFieldsFilled = [username, phoneNumber, university, password, confirmPassword].every(field => field.trim() !== '');
    setIsButtonDisabled(!allFieldsFilled);
  }, [formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'username') {
      setNameExistsError('');
    }

    if (id === 'phoneNumber') {
      const phoneRegex = /^0\d{9}$/;
      if (!phoneRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: 'Phone number must start with "0" and have exactly 10 digits.'
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: ''
        }));
      }
    }

    if (id === 'promoCode') {
      setPromoError(''); // Clear promo code error when user starts typing
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleFocus = (e) => {
    e.target.previousElementSibling.style.display = 'none';
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;

    if (!value) {
      e.target.previousElementSibling.style.display = 'flex';
    }
  };

  const handleLogin = async (phoneNumber, password) => {
    try {
      const response = await axios.post('v1/student/logIn', {
        email: phoneNumber,
        password
      });

      if (response.data.status === 'Log in success!') {
        Cookies.set('refresh_token', response.data.refresh_token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
        navigate('/');
      } else {
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, phoneNumber, university, password, confirmPassword, promoCode } = formData;
    const allFieldsFilled = [username, phoneNumber, university, password, confirmPassword].every(field => field.trim() !== '');

    if (!allFieldsFilled) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        formCompletion: 'Please fill in all fields.'
      }));
      return;
    }

    if (password !== confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordMatch: false
      }));
      return;
    }

    const { confirmPassword: _, ...backendData } = formData;
    backendData.email = phoneNumber;

    try {
      setIsLoading(true);

      const response = await axios.post('v1/student/registerUser', backendData);

      if (response.data === 'Sorry a user with this phonenumber already exists') {
        setEmailExistsError('Sorry, a user with this PhoneNumber already exists');
      } else if (response.data === 'Sorry a user with this username already exists') {
        setNameExistsError('Sorry, a user with this username already exists');
      } else if (response.data === 'Sorry the promocode is not correct') {
        setPromoError('Sorry, the promocode is not correct');
      } else if (response.data === 'registered') {
        localStorage.setItem('username', username);
        setRegistrationStatus(true);

        handleLogin(phoneNumber, password);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-[361px] md:w-[464px] h-[590px] md:h-[642px] bg-white shadow-[4px_-5px_9.34px_0px_rgba(146,146,146,0.16)] rounded-3xl pl-[40px] pt-[30px]'>
      <div className='flex justify-between items-center'>
        <p className='font-inter text-[24px] md:text-[38px] font-bold'>Sign up</p>
        <div className='pr-[40px]'>
          <img src={zege} className='w-[60px] md:w-[80px] h-[25px] md:h-[33px]' alt="Zege Logo" />
        </div>
      </div>
      <div className='pt-4 flex'>
        <p className='font-inter text-[16px]'>Already have an account? </p>
        <Link to='/SignIn'>
          <p className='text-[rgba(79,0,86,1)]'>Login</p>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <div className="relative mt-4">
          <input
            type="text"
            id="username"
            className="block w-[290px] md:w-[400px] md:h-[40px] h-[32px] rounded-md border border-gray-300 py-1.5 px-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            value={formData.username}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder=" "
          />
          <label
            htmlFor="username"
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-opacity duration-300 ${
              formData.username ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className='flex'>
              <img src={user} className='pr-2' alt="User Icon" /> Username
            </div>
          </label>
          {nameExistsError && (
            <p className="text-red-500 text-sm">{nameExistsError}</p>
          )}
        </div>

        {/* Phone Number Input */}
        <div className="relative mt-4">
          <input
            type="tel"
            id="phoneNumber"
            className="block w-[290px] md:w-[400px] md:h-[40px] h-[32px] rounded-md border border-gray-300 py-1.5 px-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            value={formData.phoneNumber}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder=" "
          />
          <label
            htmlFor="phoneNumber"
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-opacity duration-300 ${
              formData.phoneNumber ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className='flex'>
              <img src={phon} className='pr-2' alt="Phone Icon" /> Phone number
            </div>
          </label>
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
          {emailExistsError && (
            <p className="text-red-500 text-sm mt-1">{emailExistsError}</p>
          )}
        </div>

        {/* University Select */}
        <div className="relative mt-4">
          <select
            id="university"
            className="block w-[290px] md:w-[400px] md:h-[40px] h-[32px] rounded-md border border-gray-300 py-1.5 pl-8 pr-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            value={formData.university}
            onChange={handleChange}
          >
            <option value="" disabled></option>
            {publicUniversities.map((university, index) => (
              <option key={index} value={university}>{university}</option>
            ))}
            {privateUniversities.map((university, index) => (
              <option key={index} value={university}>{university}</option>
            ))}
            <option value="Other">Other</option>
          </select>
          <label
            htmlFor="university"
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-opacity duration-300 ${
              formData.university ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className='flex'>
              <img src={school} className='pr-2' alt="School Icon" /> University
            </div>
          </label>
        </div>

        {/* Password Input */}
        <div className="relative mt-4">
          <input
            type="password"
            id="password"
            className="block w-[290px] md:w-[400px] md:h-[40px] h-[32px] rounded-md border border-gray-300 py-1.5 px-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            value={formData.password}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder=" "
          />
          <label
            htmlFor="password"
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-opacity duration-300 ${
              formData.password ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className='flex'>
              <img src={lock} className='pr-2' alt="Lock Icon" /> Password
            </div>
          </label>
        </div>

        {/* Confirm Password Input */}
        <div className="relative mt-4">
          <input
            type="password"
            id="confirmPassword"
            className="block w-[290px] md:w-[400px] md:h-[40px] h-[32px] rounded-md border border-gray-300 py-1.5 px-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            value={formData.confirmPassword}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder=" "
          />
          <label
            htmlFor="confirmPassword"
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-opacity duration-300 ${
              formData.confirmPassword ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className='flex'>
              <img src={check} className='pr-2' alt="Check Icon" /> Confirm Password
            </div>
          </label>
          {!errors.passwordMatch && (
            <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
          )}
        </div>

        {/* Promo Code Input */}
        <div className="relative mt-4">
          <input
            type="text"
            id="promoCode"
            className="block w-[290px] md:w-[400px] md:h-[40px] h-[32px] rounded-md border border-gray-300 py-1.5 px-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            value={formData.promoCode}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Promo Code (Optional)"
          />
          <label
            htmlFor="promoCode"
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-opacity duration-300 ${
              formData.promoCode ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className='flex'>
              <img src={check} className='pr-2' alt="Promo Icon" /> Promo Code
            </div>
          </label>
          {promoError && (
            <p className="text-red-500 text-sm mt-1">{promoError}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`mt-6 w-[290px] md:w-[400px] h-[32px] md:h-[40px] bg-[#4F0056] text-white rounded-lg ${
            isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Processing...' : 'Sign up'}
        </button>

        {errors.formCompletion && (
          <p className="text-red-500 text-sm mt-2">{errors.formCompletion}</p>
        )}

        {registrationStatus && (
          <p className="text-green-500 text-sm mt-2">Registration successful! Redirecting...</p>
        )}
      </form>
    </div>
  );
}

export default Forms2;