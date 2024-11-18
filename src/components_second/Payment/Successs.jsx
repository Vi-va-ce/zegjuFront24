import React from 'react';

const Successs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-green-600">Payment Successful</h1>
        <p className="mt-4 text-gray-700">Thank you! Your payment has been processed successfully.</p>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Successs;