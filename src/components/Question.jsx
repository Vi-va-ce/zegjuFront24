import React, { useEffect, useState } from 'react';


function Question({ data, currentIndex }) {
  const [questionText, setQuestionText] = useState('');

  useEffect(() => {
    if (
      data &&
      data.sections &&
      data.sections[currentIndex] &&
      data.sections[currentIndex].question_group &&
      data.sections[currentIndex].question_group[0] &&
      data.sections[currentIndex].question_group[0].question_types &&
      data.sections[currentIndex].question_group[0].question_types[0] &&
      data.sections[currentIndex].question_group[0].question_types[0].questions &&
      data.sections[currentIndex].question_group[0].question_types[0].questions[currentIndex]
    ) {
      const question =
        data.sections[currentIndex].question_group[0].question_types[0].questions[currentIndex];
      const questionText = question?.question_text || '';
      setQuestionText(questionText);
    }
  }, [data, currentIndex]);

  return (
  <div>
       <div className='gradient-backgroundtwo rounded-t-3xl shortquestion-size'>
      <div className='text-white'>
        <p className='p-8'>{currentIndex+1}. {questionText}</p>
      </div>
    </div>
  </div>
    
  );
}

export default Question;