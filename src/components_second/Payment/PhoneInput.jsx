import React from 'react';

function PhoneInput({ phone, setPhone, phoneError }) {
  return (
    <div className="bg-white md:w-[736px] w-[361px] md:h-[214px] h-[187px] rounded-md shadow-md">
      <div className="flex items-center justify-center">
        <form className="md:w-[680px] flex flex-col items-center md:mt-[40px] mt-[50px]">
          <label
            htmlFor="phone"
            className="md:text-lg md:text-[32px] font-semibold mb-2"
          >
            Phone Number
          </label>
          <div className="flex items-center">
            <input
              type="text"
              value="+251"
              readOnly
              className="border border-gray-600 p-2 rounded-l-md pl-3 pr-2 bg-gray-200 w-[70px]"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              className="border border-gray-600 p-2 rounded-r-md pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[calc(100%-70px)]"
              required
            />
          </div>
          {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
        </form>
      </div>
    </div>
  );
}

export default PhoneInput;