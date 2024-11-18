import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const navigate = useNavigate();

  const handleFocus = (e) => {
    e.target.previousElementSibling.style.display = 'none';
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      e.target.previousElementSibling.style.display = 'block';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');
    setIsLoading(true); // Set loading state to true

    try {
      const { data } = await axios.post('v1/student/logIn', {
        email,
        password,
      });

  

      Cookies.set('refresh_token', data.refresh_token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;

      if (data.status === 'Log in success!') {
        onLoginSuccess();
        navigate('/HomePage');
      } else if (data === 'incorrect password') {
        setPasswordError('Incorrect password. Please try again.');
      } else if (data === 'No Student is found with the email') {
        setEmailError('No student found with the email. Please try again.');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Set loading state back to false after receiving the response
    }
  };

  return (
    <>
      <div className='mx-auto'>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <div className='mb-16'>
            <h1 className='mt-6 ml-[-120px] md:mt-10 md:ml-[0px] text-center text-2xl font-bold leading-9 tracking-tight create-account-style'>Login</h1>
          </div>
          <div className='form-field'>
            <div className='mb-16'>
              <label htmlFor="email" className={email ? 'hidden' : ''}>
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="p-2 registration-width md:w-[350px] h-[10px] w-[290px] h-[10px] md:h-[38px] blank-form"
              />
              {emailError && <p className="text-red-500 text-sm]">{emailError}</p>}
            </div>
          </div>
          <div className='form-field'>
            <div className='mb-16'>
              <label htmlFor="password" className={password ? 'hidden' : ''}>
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="p-2 registration-width md:w-[350px] h-[10px] w-[290px] h-[10px] md:h-[38px] blank-form"
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
          </div>
          <div className='flex justify-center items-center'>
          <button type="submit"  className='signuppage-layout signup-button' disabled={isLoading}>
  {isLoading ? (
    <div className='pl-[40px]'>
    <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"
      ></path>
    </svg>
    </div>
  ) : (
    'Login'
  )}
</button>

          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;