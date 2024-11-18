import React, { useState, useEffect } from 'react';
import { thisone } from '../../../../assets';

function ChoicesTwo({ data, currentIndex, onLocalStorageChange }) {
  const [choices, setChoices] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const testId = data.test_id;
    if (
      data &&
      data.sections?.[2]?.section_id &&
      data.sections?.[2]?.question_group?.[0]?.question_types?.[0]?.questions?.[currentIndex]?.question_text
    ) {
      const sectionId = data.sections[0].section_id;
      const question =
        data.sections[2].question_group[0].question_types[0].questions[currentIndex];
      const questionChoices = question.choices?.map(choice => ({
        sectionId: sectionId,
        questionId: question.question_id,
        choiceId: choice.choose_id,
        testId: testId,
        text: choice.choose_text
      })) || [];
      setChoices(questionChoices);

      const savedChoice = localStorage.getItem(`selectedChoice_${sectionId}_${question.question_id}`);
      if (savedChoice && questionChoices.some(choice => choice.choiceId === savedChoice)) {
        setSelected(savedChoice);
      } else {
        setSelected('');
      }
    }
  }, [data, currentIndex]);

  const handleClick = (choiceId) => {
    if (selected === choiceId) {
      // If the clicked choice is already selected, deselect it
      setSelected('');
    } else {
      setSelected(choiceId);

      const sectionId = data.sections[2].section_id + "mathwithcalculator";
      const questionId = data.sections[2].question_group[0].question_types[0].questions[currentIndex].question_id ;
      const testId = data.test_id;

      // Store the choice in the localStorage
      localStorage.setItem(`selectedChoice_${sectionId}_${questionId}`, choiceId);

      // Send the selected choice to the parent component
      onLocalStorageChange(localStorage);

      // Optional: Save the selected choice to the nested JSON structure
      const localStorageData = JSON.parse(localStorage.getItem('jsonData')) || {};
      if (!localStorageData[testId]) {
        localStorageData[testId] = {};
      }
      if (!localStorageData[testId][sectionId]) {
        localStorageData[testId][sectionId] = {};
      }
      if (!localStorageData[testId][sectionId][questionId]) {
        localStorageData[testId][sectionId][questionId] = {};
      }
      localStorageData[testId][sectionId][questionId] = choiceId;

      // Save the updated JSON data to localStorage
      localStorage.setItem('jsonData', JSON.stringify(localStorageData));
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='bg-white md:w-[844px] w-[361px] mb-2'>
        <div className='mb-2 mt-2 ml-2'>Choose the correct answer</div>
      </div>
      <ul>
        {choices.map((choice, index) => (
          <li key={index}>
            <button onClick={() => handleClick(choice.choiceId)}>
              <div className={`bg-white md:w-[844px] w-[361px] mb-2 hover:bg-gray-200 ${selected === choice.choiceId ? 'bg-gray-500' : ''}`}>
              <div className="flex justify-center items-center">
                  {selected === choice.choiceId && (
                    <img src={thisone} alt="This One" className="mr-2 w-6 h-6" />
                  )}
                <p className='md:p-8 p-2 md:text-[15px] text-[13.01px]  font-semibold items-center'>
                  {choice.text}
                </p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChoicesTwo;