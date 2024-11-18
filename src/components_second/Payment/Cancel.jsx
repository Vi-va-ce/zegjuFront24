import React from 'react';

const Cancel = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-yellow-600">Payment Canceled</h1>
      <p className="mt-4 text-gray-700">Your payment was canceled. No charges have been made.</p>
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
      >
        Go Back
      </button>
    </div>
  </div>
);
};

export default Cancel;