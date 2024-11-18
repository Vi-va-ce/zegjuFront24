import React, { useState, useEffect } from 'react';

function ConfirmationDialog({ open, onConfirm, onCancel, explanation }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[750px] h-[360px] p-8 relative">
        <div className="h-[300px] p-4 overflow-y-auto">
          {explanation}
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

function Explanation({ currentIndex, responseData }) {
  const [explanation, setExplanation] = useState(null);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [hasMadeSelection, setHasMadeSelection] = useState(false);

  useEffect(() => {
    if (currentIndex !== null) {
      const storedExplanation = localStorage.getItem(`explanation_${currentIndex}`);
      if (storedExplanation) {
        if (storedExplanation !== explanation) {
          setExplanation(storedExplanation);
        }
      } else if (responseData && responseData.explanation) {
        const newExplanation = responseData.explanation;
        if (newExplanation !== explanation) {
          setExplanation(newExplanation);
          localStorage.setItem(`explanation_${currentIndex}`, newExplanation);
        }
      } else {
        setExplanation(null);
      }
    }
  }, [currentIndex, responseData, explanation]);

  useEffect(() => {
    if (currentIndex !== null) {
      setShowConfirmationDialog(false);
      setHasMadeSelection(true);
    }
  }, [currentIndex]);

  const handleClick = () => {
    if (currentIndex !== null) {
      const storedExplanation = localStorage.getItem(`explanation_${currentIndex}`);
      if (storedExplanation) {
        setShowConfirmationDialog(true);
      } else {
        setShowConfirmationDialog(false);
        setHasMadeSelection(true);
      }
    }
  };

  const handleCancel = () => {
    setShowConfirmationDialog(false);
  };

  const handleConfirm = () => {
    setShowConfirmationDialog(false);
  };

  if (!hasMadeSelection) {
    return <div></div>;
  }

  return (
    <>
      <button
        className="w-[82px] h-[30px] bg-teal-700 hover:bg-teal-900 rounded-full"
        onClick={handleClick}
      >
        <div className="submit-text mb-1">Explain</div>
      </button>

      <ConfirmationDialog
        open={showConfirmationDialog}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        explanation={explanation}
      />
    </>
  );

}

export default Explanation;