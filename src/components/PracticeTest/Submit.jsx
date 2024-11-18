import React, { useState } from 'react';
import axios from 'axios';

function ConfirmationDialog({ open, onConfirm, onCancel }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8">
        <div className="text-center">if you submit the final answer, you can not go back</div>
        <div className="flex justify-center mt-4">
          <button className="w-[72px] h-[30px]  bg-emerald-700 hover:bg-emerald-900 rounded-full text-white " onClick={onConfirm}>
            submit
          </button>
          <button className="ml-4 w-[72px] h-[30px]  bg-red-800 hover:bg-red-950 text-white rounded-full" onClick={onCancel}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function Submit() {
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const handleConfirm = async () => {
    try {
      const jsonData = localStorage.getItem('jsonData');

      const response = await axios.post(
        'https://turtle-summary-intensely.ngrok-free.app/api/v2/student/userResponse',
        jsonData
      );
      console.log('jsonData:', jsonData);
      console.log('Submit response:', response);
      // Handle the response from the API as needed
    } catch (error) {
      console.error('Error submitting user response:', error);
      // Handle the error as needed
    }
  };

  const handleCancel = () => {
    setShowConfirmationDialog(false);
  };

  const handleSubmit = () => {
    setShowConfirmationDialog(true);
  };

  return (
    <>
      <button className="w-[82px] h-[30px] bg-teal-700 hover:bg-teal-900 rounded-full" onClick={handleSubmit}>
        <div className="submit-text mb-1">submit</div>
      </button>
      <ConfirmationDialog open={showConfirmationDialog} onConfirm={handleConfirm} onCancel={handleCancel} />
    </>
  );
}

export default Submit;