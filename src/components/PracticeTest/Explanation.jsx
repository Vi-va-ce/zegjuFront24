import React, { useState } from 'react';
import axios from 'axios';

function ConfirmationDialog({ open, onCancel }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[750px] h-[360px] p-8 relative">
        <div className="h-[300px] p-4 overflow-y-auto">
        if you submit the final answer, you cannot go back... if you submit the final answer, you cannot go back... if you submit the final answer, you cannot go back... if you submit the final answer, you cannot go back... if you submit the final answer, you cannot go back... if you submit the final answer, you cannot go back...if you submit the final answer, you cannot go back... if you submit the final answer, you cannot go back... if you submit the final answer, you cannot go back... if you submit the final answer, you cannot go back... if you submit the final answer, you cannot go back... if you submit the final answer, you cannot go back...if you submit the final answer, you cannot go back...if you submit the final answer, you cannot go back...if you submit the final answer, you cannot go back...if you submit the final answer, you cannot go back...if you submit the final answer, you cannot go back...if you submit the final answer, you cannot go back...if you submit the final answer, you cannot go back...if you submit the final answer, you cannot go back...if you submit the final answer, you 
         </div>
        <button
          className="absolute top-4 right-4 w-[30px] h-[30px] hover:bg-gray-200 text-black rounded-full"
          onClick={onCancel}
        >
          X
        </button>
      </div>
    </div>
  );
}

function Explanation() {
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
        <div className="submit-text mb-1">Explain</div>
      </button>
      <ConfirmationDialog open={showConfirmationDialog} onConfirm={handleConfirm} onCancel={handleCancel} />
    </>
  );
}

export default Explanation;