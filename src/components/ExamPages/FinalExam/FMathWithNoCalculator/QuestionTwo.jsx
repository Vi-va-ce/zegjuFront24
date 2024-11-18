import React, { useState, useEffect } from 'react';

function QuestionTwo({ data, currentIndex }) {
  const [showText, setShowText] = useState(false);
  const [questionText, setQuestionText] = useState('');

  useEffect(() => {
    if (
      data &&
      data.sections?.[2]?.question_group?.[1]?.question_types?.[0]?.questions?.[0]?.questions?.[currentIndex]?.question_text
    ) {
      const question =
        data.sections[2].question_group[1].question_types[0].questions[0].questions[currentIndex].question_text;
      setQuestionText(question);
    }
  }, [data, currentIndex]);

  const handleToggleText = () => {
    setShowText((prevState) => !prevState);
  };

  return (
    <div className='gradient-backgroundtwo md:rounded-t-3xl rounded-tl-[20px] rounded-tr-[20px] md:w-[844px] w-[361px] flex-shrink-0'>
      <div className='text-white'>
        <p className={`md:p-12 p-5 m-2 md:text-[15px] text-[13.01px]  ${showText ? '' : 'max-h-36 overflow-hidden'}`}>
          {currentIndex + 1}. {questionText}
        </p>
        {questionText.length > 6 && (
          <div className="flex justify-center">
            <button onClick={handleToggleText}>
              {showText ? 'Read Less' : 'Read More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionTwo;