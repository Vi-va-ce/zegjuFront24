import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationFormTwo = () => {
  const navigate=useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFocus = (e) => {
    e.target.previousElementSibling.style.display = 'none';
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      e.target.previousElementSibling.style.display = 'block';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the form field values using the state variables (OTPcode, Transactionid, phoneNumber)
  };

  return (
    <div className='mx-auto'>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <h1 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight create-account-style'>verify your account</h1>
        <div className='form-field'>
  <label htmlFor="phoneNumber" className={phoneNumber ? 'hidden' : ''}>
    Phone Number
  </label>
  <input
    type="tel"
    id="phoneNumber"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
    onFocus={handleFocus}
    onBlur={handleBlur}
    required
    pattern="[0-9]{1,15}" // Specify the allowed pattern for phone numbers
    className="p-2 registration-width border-gradient"
  />
</div>
       

        <div className='flex justify-center items-center'>
        <button onClick={() => navigate('LoginPage')} type="submit" className='signuppage-layout signup-button'>Send code</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationFormTwo;