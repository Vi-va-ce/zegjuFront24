import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = ({ phoneNumber, onRegistered }) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [educationStatus, setEducationStatus] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [emailExistsError, setEmailExistsError] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e, setter) => {
    const { value } = e.target;
    setter(value);
  };

  const handleFocus = (e) => {
    e.target.previousElementSibling.style.display = 'none';
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;

    if (id === 'firstName') {
      setFirstNameError(value ? '' : 'First name is required');
    } else if (id === 'lastName') {
      setLastNameError(value ? '' : 'Last name is required');
    } else if (id === 'email') {
      setEmailError(value ? (value.includes('@') ? '' : 'Invalid email address') : 'Email is required');
    } else if (id === 'password') {
      setPasswordError(value ? '' : 'Password is required');
    } else if (id === 'confirmPassword') {
      setConfirmPasswordError(value ? (value === password ? '' : 'Passwords do not match') : 'Confirm password is required');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (firstNameError || lastNameError) {
      return;
    }
  
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
  
      const formData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        educationStatus,
        password,
      };
  
      try {
        setIsLoading(true); // Set loading state to true before making the API request
  
        const response = await axios.post('v1/student/registerUser', formData);
        console.log(response.data);
  
        // Check if the response data contains an error message
        if (response.data === 'Sorry a user with this email already exists') {
          setEmailExistsError('Sorry, a user with this email already exists');
        } else if (response.data === 'registered') {
          setRegistrationStatus(true);
          setTimeout(() => {
            navigate('/Login'); // Navigate to the "Login" page after a delay
          }, 2000); // Delay in milliseconds
        }
      } catch (error) {
        console.error(error);
        // Handle other errors, if any
      } finally {
        setIsLoading(false); // Set loading state back to false after the API request is complete
      }
    }
  };

  const isSubmitDisabled = password !== confirmPassword;

  return (
    <div className='mx-auto'>
      {registrationStatus ? (
        <p className='text-green-500'>Registered Successfully</p>
      ) : (
        <>
          <p className='text-cyan-100 text-[16px]'>
            Phone number is verified, please proceed to filling up the form now
          </p>


    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto  md:ml-[70px] ml-[10px] mt-[10px]"
    >
      <div className='form-field '>
        <label htmlFor="firstName" className={firstName ? 'hidden' : ''}>
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
        />
        {firstNameError && (
          <p className="text-red-500 text-sm">{firstNameError}</p>
        )}
      </div>

      <div className='form-field'>
        <label htmlFor="lastName" className={lastName ? 'hidden' : ''}>
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
        />
        {lastNameError && (
          <p className="text-red-500 text-sm">{lastNameError}</p>
        )}
      </div>

      <div className='form-field'>
        <label htmlFor="email" className={email ? 'hidden' : ''}>
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
        />
        {emailError && (
          <p className="text-red-500 text-sm">{emailError}</p>
        )}
        {emailExistsError && (
          <p className="text-red-500 text-sm">{emailExistsError}</p>
        )}
      </div>

      <div className='form-field'>
          <label htmlFor="educationStatus" className={educationStatus ? 'hidden' : ''}>
            Education Status
          </label>
          <select
            id="educationStatus"
            value={educationStatus}
            onChange={(e) => handleInputChange(e, setEducationStatus)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
          > <option value=""></option>
            <option value="High School" className='text-black'>High School</option>
            <option value="College" className='text-black'>College</option>
            <option value="Graduate School" className='text-black'>Graduate School</option>
          </select>
        </div>

        <div className='form-field'>
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
            className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </div>

        <div className='form-field'>
          <label htmlFor="confirmPassword" className={confirmPassword ? 'hidden' : ''}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
          />
          {confirmPasswordError && (
            <p className="text-red-500 text-sm">{confirmPasswordError}</p>
          )}
        </div>

        {passwordMatchError && (
          <p className="text-red-500 text-sm">Passwords do not match</p>
        )}

{registrationStatus === 'registered' && (
          <p className="text-green-500 text-sm">Registered successfully</p>
        )}
<div className="flex justify-center items-center">

     
<button
  type="submit"
  className="signuppage-layout signup-button"
  disabled={isSubmitDisabled || isLoading} // Disable the button when form is submitting (isLoading is true)
>
  {isLoading ? (
    <div className="pl-[40px]">
      <svg
        className="animate-spin h-5 w-5 mr-3"
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
    </div>
  ) : (
    'Register'
  )}
</button>
      </div>
    </form>
     </>
      )}
    </div>
  );
};

export default RegistrationForm;