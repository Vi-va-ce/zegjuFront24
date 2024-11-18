import React from "react";



function NextAndPrevButton({ handlePrevious, handleNext, isPreviousDisabled, isNextDisabled }) {
    return (
      <div className='flex justify-between mt-4'>
        <button onClick={handlePrevious} disabled={isPreviousDisabled}>
          Previous
        </button>
        <button onClick={handleNext} disabled={isNextDisabled}>
          Next
        </button>
      </div>
    );
  }
  export default NextAndPrevButton
 