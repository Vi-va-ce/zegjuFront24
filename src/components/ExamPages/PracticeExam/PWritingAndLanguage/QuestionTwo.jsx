import React, { useState, useEffect } from 'react';

function QuestionTwo({ data, currentIndex }) {
  const [showText, setShowText] = useState(false);
  const [questionText, setQuestionText] = useState('');
  const [questionImage, setQuestionImage] = useState('');

  useEffect(() => {
    if (
      data &&
      data.sections?.[1]?.question_group?.[0]?.question_types?.[0]?.questions?.[currentIndex]?.question_text
    ) {
      const question =
        data.sections[1].question_group[0].question_types[0].questions[currentIndex].question_text;
      setQuestionText(question);
    } else {
      setQuestionText('');
    }

    if (
      data &&
      data.sections?.[1]?.question_group?.[0]?.question_types?.[0]?.questions?.[currentIndex]?.image
    ) {
      const imageUrl =
        data.sections[1].question_group[0].question_types[0].questions[currentIndex].image;
      setQuestionImage(imageUrl);
    } else {
      setQuestionImage('');
    }
  }, [data, currentIndex]);

  const handleToggleText = () => {
    setShowText((prevState) => !prevState);
  };

  return (
    <div className='gradient-backgroundtwo md:rounded-t-3xl rounded-tl-[20px] rounded-tr-[20px] md:w-[844px] w-[361px] flex-shrink-0'>
      <div className='text-white'>
        {questionText && (
          <p className={`md:p-12 p-5 m-2 md:text-[15px] text-[13.01px]  ${showText ? '' : 'max-h-36 overflow-hidden'}`}>
            {currentIndex + 1}. {questionText}
          </p>
        )}
        {questionText && questionText.length > 6 && (
          <div className="flex justify-center">
            <button onClick={handleToggleText}>
              {showText ? 'Read Less' : 'Read More'}
            </button>
          </div>
        )}
        {questionImage && (
          <div className="flex justify-center">
            <img src={questionImage} alt="Question Image" className=" object-cover pb-4" />
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionTwo;