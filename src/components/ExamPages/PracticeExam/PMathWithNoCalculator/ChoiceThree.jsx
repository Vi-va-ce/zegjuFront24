import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Explanation from './Explanation';
import { thisone } from '../../../../assets';

function ChoiceThree({ data, currentIndex, onResponseData, responseData }) {
  const [choices, setChoices] = useState([]);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [hasMadeSelection, setHasMadeSelection] = useState(false);

  useEffect(() => {
    if (
      data &&
      data.sections?.[2]?.section_id &&
      data.sections?.[2]?.question_group?.[1]?.question_types?.[0]?.questions?.[0].questions?.[currentIndex]?.question_text
    ) {
      const sectionId = data.sections[0].section_id;
      const question =
        data.sections[2].question_group[1].question_types[0].questions[0].questions[currentIndex];

      const questionChoices = question.choices?.map((choice) => ({
        sectionId: sectionId,
        questionId: question.question_id,
        choiceId: choice.choose_id,
        testId: data.test_id,
        text: choice.choose_text,
      })) || [];
      setChoices(questionChoices);

      setSelectedChoices((prevSelectedChoices) => ({
        ...prevSelectedChoices,
        [question.question_id]: localStorage.getItem(question.question_id) || '',
      }));
    }
  }, [data, currentIndex]);

  const handleChoiceSelection = (questionId, choiceId, choiceText) => {
    if (selectedChoices[questionId] === '') {
      setSelectedChoice(choiceId);
      setSelectedChoices((prevSelectedChoices) => ({
        ...prevSelectedChoices,
        [questionId]: choiceId,
      }));
      sendResultToAPI(questionId, choiceId);
      localStorage.setItem(questionId, choiceId);

      setHasMadeSelection(true);
    }
  };

  const sendResultToAPI = (questionId, choiceId) => {
    const testId = data.test_id;
    const sectionId = data.sections[2].section_id;

    const requestData = {
      [`${testId}`]: {
        [`${sectionId}`]: {
          [`${questionId}`]: choiceId,
        },
      },
    };

    console.log('Request Data:', requestData);

    axios
      .post('v2/student/practiceTestResult', requestData)
      .then((response) => {
        console.log(requestData);
        onResponseData(response.data);
        console.log('Result sent successfully!');
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error sending result:', error);
      });
  };

  useEffect(() => {
    const selectedChoicesFromStorage = {};
    choices.forEach((choice) => {
      const storedChoiceId = localStorage.getItem(choice.questionId);
      if (storedChoiceId) {
        selectedChoicesFromStorage[choice.questionId] = storedChoiceId;
      }
    });
    setSelectedChoices((prevSelectedChoices) => ({
      ...prevSelectedChoices,
      ...selectedChoicesFromStorage,
    }));
  }, [choices]);

  return (
    <div className="flex flex-col">
      <div className="bg-white md:w-[844px] w-[361px] mb-2">
        <div className="mb-2 mt-2 ml-2">
          Choose the correct answer
          <div className="md:ml-96 ml-[140px]">
            {hasMadeSelection ? (
              <Explanation responseData={responseData} currentIndex={currentIndex} />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      <ul>
        {choices.map((choice, index) => (
          <li key={index}>
            <button
              onClick={() =>
                handleChoiceSelection(choice.questionId, choice.choiceId, choice.text)
              }
              disabled={
                selectedChoices[choice.questionId] !== '' &&
                selectedChoices[choice.questionId] !== choice.choiceId
              }
            >
              <div className="bg-white md:w-[844px] w-[361px] mb-2 hover:bg-gray-200">
                <div className="flex justify-center items-center">
                  {selectedChoices[choice.questionId] === choice.choiceId && (
                    <img src={thisone} alt="This One" className="mr-2 w-6 h-6" />
                  )}
                  <p className="md:p-8 p-2 md:text-[15px] text-[13.01px] font-semibold">
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

export default ChoiceThree;