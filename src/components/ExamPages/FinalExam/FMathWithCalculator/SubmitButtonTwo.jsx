import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ConfirmationDialog({ open, onConfirm, onCancel }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8">
        <div className="text-center">If you submit the final answer, you cannot go back.</div>
        <div className="flex justify-center mt-4">
          <button className="w-[72px] h-[30px] bg-emerald-700 hover:bg-emerald-900 rounded-full text-white" onClick={onConfirm}>
            Submit
          </button>
          <button className="ml-4 w-[72px] h-[30px] bg-red-800 hover:bg-red-950 text-white rounded-full" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function SubmitButtonTwo({ message, onResponseSubmit }) {
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [submittingTimer, setSubmittingTimer] = useState(null);

  const handleConfirm = async () => {
    try {
      const jsonData = JSON.parse(localStorage.getItem('jsonData'));
  
      const response = await axios.post('/v2/student/userResponse', jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const responseData = response.data;
      const explanation = response.data.explanation;

      console.log(explanation)

  
      console.log(responseData);
  
      if (responseData === 'Response Submitted') {
        onResponseSubmit(responseData);
        
        // Remove items from local storage starting with "selectedChoice"
        Object.keys(localStorage).forEach((key) => {
          if (key.startsWith('selectedChoice')) {
            localStorage.removeItem(key);
          }
        });
  
        localStorage.removeItem('jsonData'); // Remove the JSON data from local storage
      }
    } catch (error) {
      console.error('Error submitting user response:', error);
    }
  };

  const handleCancel = () => {
    setShowConfirmationDialog(false);
  };

  const handleSubmit = () => {
    setShowConfirmationDialog(true);
  };

  useEffect(() => {
    if (message === 'Time is up. Submitting...') {
      setShowConfirmationDialog(true);

      const timer = setTimeout(() => {
        handleConfirm();
        
        setShowConfirmationDialog(false);
      }, 2000);

      setSubmittingTimer(timer);
    }

    return () => {
      clearTimeout(submittingTimer);
    };
  }, [message]);

  return (
    <>
      {showConfirmationDialog && (
        <ConfirmationDialog open={showConfirmationDialog} onConfirm={handleConfirm} onCancel={handleCancel} />
      )}

      {!showConfirmationDialog && (
        <button className="w-[82px] h-[30px] bg-teal-700 hover:bg-teal-900 rounded-full" onClick={handleSubmit}>
          <div className="submit-text mb-1">submit</div>
        </button>
      )}

      {!showConfirmationDialog && message === 'Time is up. Submitting...' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <div className="text-center">
              {message}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SubmitButtonTwo;