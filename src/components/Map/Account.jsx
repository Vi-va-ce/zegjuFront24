import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { time } from '../../assets';

function Account() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.post('v1/student/studentProfile', {
          // Add any request payload if required
        });
        setProfileData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const username = profileData?.firstName + " " +profileData?.lastName || "";
  const firstLetter = username.charAt(0);
  const joinedMonth = profileData?.joinedMonth || "February 2024";
  const email = profileData?.email || "Eesromsharew1";
  const xp = profileData?.xp || "112";


  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordUpdateSuccess, setPasswordUpdateSuccess] = useState(false); // New state variable
  const [showNotification, setShowNotification] = useState(false); // New state variable
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleDeleteAccount = async () => {
    const confirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
  
    if (confirmed) {
      try {
        const response = await axios.put('v1/student/deleteUser');
        console.log(response.data); // Handle the response data as needed
        if (response.data === 'User deleted successfully!') {
          setDeleteSuccess(true);
          // Perform any additional actions upon successful deletion
        }
      } catch (error) {
        console.error(error); // Handle any errors that occurred during the request
      }
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(newPassword === e.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      if (newPassword !== confirmPassword) {
        setPasswordsMatch(false);
        return;
      }

      const response = await axios.put('v1/student/changePassword', {
        newPassword: newPassword,
      });

      console.log(response.data); // Handle the response data as needed
      if (response.data === 'User password updated successfully!') {
        setPasswordUpdateSuccess(true);
        setShowNotification(true); // Show the notification
        setTimeout(() => setShowNotification(false), 3000); // Hide the notification after 3 seconds
      } } catch (error) {
      console.error(error); // Handle any errors that occurred during the request
    }
  };

  return (
    <div>
      <div className="ml-[60px] mt-[45px]  hidden md:block">
        <p className="w-[48px] h-[18px] text-[18px] font-bold font-inter">Account</p>
      </div>
      <div className="flex mt-[] md:mt-[10px]">
        <div className="hidden md:block">
          <div className="ml-[26px] mt-[36px]">
            <p className="text-[18px] font-bold font-inter">{username}</p>
          </div>
          <div className="ml-[26px] mt-[2px]">
            <p className="text-[14px] font-inter">{email}</p>
          </div>
          <div className="ml-[26px] mt-[2px] flex">
            <img className="w-[17px] h-[17px]" src={time} alt="time" />
            <p className="text-[12px] font-inter ml-0.5">time joined {joinedMonth}</p>
          </div>
        </div>

        <div className="md:ml-[525px] ml-[220px] mt-[60px] md:mt-[-24px]">
          <button className="flex md:w-[170px] w-[130px]  h-[30px] bg-gray-200 hover:bg-gray-300 rounded-lg" onClick={handleSaveChanges}>
            <p className="md:text-[18px] text-[13px] font-bold md:ml-8 ml-6 md:mt-0.5 mt-1.5">Save Changes</p>
          </button>
        </div>
      </div>

      <div className="box-border w-[327px] h-[350px] border-2 ml-[120px] md:ml-[550px] mt-[28px] md:mt-[-98px] border-[0px] md:border-[2px]">
        <div className="flex md:mt-[40px] mt-[-60px] md:ml-[20px] ml-[-115px]  ">
          <div className="md:w-14 w-[50px] md:h-14 h-[50px] rounded-full bg-blue-500 relative"></div>
          <div className="absolute md:mt-[-4px] mt-[2px] md:ml-[18px] ml-[16px]">
            <p className="md:text-[39px] text-[29px] text-white ">{firstLetter}</p>
          </div>
          <div className="ml-[20px] ">
            <p className="md:text-[18px] text-[15px]  font-bold font-inter">{email}</p>
            <p className="text-blue-500 font-semibold md:text-[15px] text-[12px]">View Your Profile</p>
          </div>
        </div>
        <div className="mt-[40px] hidden md:block">
          <button className="w-[260px] h-[36px] bg-gray-200 hover:bg-gray-300 rounded-lg ml-6 mt-4">
            <p className="font-bold text-[16px] ">Account</p>
          </button>
        </div>
      </div>

      <div className="max-w-sm mx-auto md:ml-[-60px] ml-[-20px] md:mt-[-200px] mt-[-270px]">
        <div className="flex">
          <label className="text-gray-700 text-sm font-bold text-[18px] mr-2 mt-2">New Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-[36px] border-2 border-gray-300 rounded-lg mt-2 px-3"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <div className="flex mt-4">
          <label className="block text-gray-700 text-sm font-bold text-[18px] mr-2 mt-3">Confirm</label>
          <input
            type="password"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              passwordsMatch ? 'border-gray-300' : 'border-red-500'
            }`}
            value={confirmPassword}
            placeholder="Confirm your new password"
            onChange={handleConfirmPasswordChange}
          />
          {!passwordsMatch && (
            <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
          )}
           {showNotification && passwordUpdateSuccess && (
            <p className="text-green-500 text-[12px] mt-1">Password successfully updated!</p>
          )}
        </div>
        
        <button onClick={handleDeleteAccount} className="md:mt-[130px] mt-[50px] md:pb-[120px] pb-[120px] md:ml-[210px] md:ml-[100px]">
  <p className="text-red-500 font-bold">Delete Account</p>
</button>
     
      </div>
    </div>
  );
}

export default Account;