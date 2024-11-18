import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgetPasswordFormsecond = ({ phoneNumber }) => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

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

    if (password === confirmPassword) {
      // Passwords match, handle form submission here
      // You can access the form field values using the state variables (password, confirmPassword)

      // Make the API request using Axios
      try {
        const response = await axios.post('v1/student/forgetPassword', {
          phoneNumber,
          password,
        });

        // Handle the response from the API
        console.log(response); // Do something with the response

        if (response.data === 'Password Changed successfully!') {
          setPasswordChanged(true);
          setTimeout(() => {
            navigate('/SignIn'); // Navigate to the "Login" page after a delay
          }, 2000); // Delay in milliseconds
        } else if (response.data === 'user not found!') {
          setUserNotFound(true);
        }
      } catch (error) {
        // Handle any errors that occurred during the API request
        console.error(error);
      }
    } else {
      // Passwords don't match, show error message
      setPasswordMatchError('Passwords do not match');
    }
  };

  return (
    <div className='mx-auto'>
      {passwordChanged ? (
        <p className='text-green-500'>Password Changed successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4 max-w-xl mx-auto'>
          <div className='form-field ml-[20px]'>
            <label htmlFor='password' className={password ? 'hidden' : ''}>
              <p className='text-black'>Password</p>
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className='p-2 w-[280.82px] h-[34.04px] bg-white rounded-lg'
            />
          </div>

          <div className='form-field ml-[20px]'>
            <label htmlFor='confirmPassword' className={confirmPassword ? 'hidden' : ''}>
              <p className='text-black'>Confirm Password</p>
            </label>
            <input
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className='p-2 w-[280.82px] h-[34.04px] bg-white rounded-lg'
            />
          </div>

          {passwordMatchError && <p className='text-red-500'>{passwordMatchError}</p>}
          {userNotFound && <p className='text-red-500'>User not found! Please try again.</p>}

          <div className='flex justify-center items-center md:ml-2s'>
            <button type='submit' className='signuppage-layout signup-button'>
              Confirm
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgetPasswordFormsecond;