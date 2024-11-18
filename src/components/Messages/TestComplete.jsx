import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TestComplete() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/Map');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-teal-200 to-teal-400">
      <div className="text-center">
        <p className="font-semibold text-5xl text-emerald-600 mb-8">Test Complete!</p>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md"
          onClick={handleContinue}
        >
          <p className="text-lg font-medium">Continue</p>
        </button>
      </div>
    </div>
  );
}

export default TestComplete;