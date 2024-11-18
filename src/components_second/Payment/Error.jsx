import React from 'react';

const Errors = ({ message }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-red-600">Payment Error</h1>
            <p className="mt-4 text-gray-700">Oops! Something went wrong with your payment.</p>
            <button
              onClick={() => window.history.back()}
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Go Back
            </button>
          </div>
        </div>
      );
    };
    

export default Errors;