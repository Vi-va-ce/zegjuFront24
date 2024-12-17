import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 
import { Link } from 'react-router-dom';
import { backb } from "../assets";


const PromoLogin = () => {
  const [role, setRole] = useState("admin"); // Default role is admin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(''); // Added errorMessage state
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      // Determine the API endpoint based on the selected role
      const endpoint =
        role === "admin"
          ? "https://zegeju-1453f.uc.r.appspot.com/api/admin/logIn"
          : "https://zegeju-1453f.uc.r.appspot.com/api/admin/logInPromoter"; // Replace with the correct endpoint for 'promoter'
        
      // Make the API request
      const response = await axios.post(endpoint, {
        email,
        password,
      });
      
      if (response.data.status === "Log in success!") {
        Cookies.set('refresh_token', response.data.refresh_token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
       
      
        if (role === "admin") {
          navigate("/PL");
        }
        else {navigate('/studentlist')}
      } else if (response.data === "No admin is found with the Phone number") {
        setErrorMessage('No user is found with this phone number');
      } 
      else if (response.data === "No promoter found with the provided phone number") {
        setErrorMessage('No user is found with this phone number');
      }else if (response.data=== "Incorrect Password") { // Check for incorrect password
        setErrorMessage('Incorrect password. Please try again.');
      }
      else if (response.data=== "incorrect password") { // Check for incorrect password
        setErrorMessage('Incorrect password. Please try again.');
      }
    } catch (error) {
      // Handle login failure
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

 
  

  return (
    <div className="bg-gray-100">
        <Link to= '/'>
      <button className='pl-[12px] pt-[12px] transition-transform duration-300 hover:scale-110'>
        <img src={backb} />
      </button>
    </Link>
 
    <div className="min-h-screen flex items-center justify-center ">

    
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-6 space-x-4">
          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              role === "admin"
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Admin
          </button>
          <button
            type="button"
            onClick={() => setRole("promoter")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              role === "promoter"
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Promoter
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">
          {role === "admin" ? "Admin Login" : "Promoter Login"}
        </h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? "bg-gray-500" : "bg-teal-600 hover:bg-teal-800"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default PromoLogin;