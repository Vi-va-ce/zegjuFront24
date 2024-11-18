import React, { useEffect, useState } from 'react';
import SubjectBar from '../Basic/Subject_bar/SubjectBar';

function ChoicMatchShort() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [showShortAnswers, setShowShortAnswers] = useState({});
  const [shuffledColumn2, setShuffledColumn2] = useState([]);

  const sections = [
    {
        type: 'passages',
        passages: [
          "Passage 1: This is a sample passage.",
          "Passage 2: This is another sample passage."
        ]
      },
    {
      type: 'multipleChoice',
      questions: [
        {
          question: "What is the capital of France?",
          choices: ["A. Paris", "B. London"],
          answer: "A. Paris"
        },
        {
          question: "What is the largest ocean?",
          choices: ["A. Atlantic", "B. Pacific"],
          answer: "B. Pacific"
        }
      ]
    },
    {
      type: 'match',
      column1: ["A. Signal", "B. Demand"],
      column2: ["A. Market", "B. Consumer"]
    },
    {
      type: 'shortAnswer',
      questions: [
        { question: "What is your favorite color?", answer: "Blue" },
        { question: "What is your hobby?", answer: "Reading" }
      ]
    }
 
  ];

  const handleAnswerClick = (questionIndex, choiceIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: choiceIndex }));
  };

  const handleShowAnswer = (questionIndex) => {
    setShowAnswers((prev) => ({ ...prev, [questionIndex]: true }));
  };

  const handleShowShortAnswer = (index) => {
    setShowShortAnswers((prev) => ({ ...prev, [index]: true }));
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const matchSection = sections.find(section => section.type === 'match');
    if (matchSection) {
      setShuffledColumn2(shuffleArray(matchSection.column2));
    }
  }, []);

  const handleRearrange = () => {
    const matchSection = sections.find(section => section.type === 'match');
    if (matchSection) {
      setShuffledColumn2(shuffleArray(matchSection.column2));
    }
  };

  return (
    <div className='min-h-screen h-auto bg-blue-100 flex flex-col'>
      <SubjectBar />
      <div className='pl-[60px] pt-6'>
        {sections.map((section, index) => {
          switch (section.type) {
            case 'multipleChoice':
              return (
                <div key={index} className='pt-6'>
                  <p className='text-[24px] text-[#966ded] font-semibold'>Choose The Best Answer</p>
                  {section.questions.map((q, qIndex) => (
                    <div key={qIndex} className='pt-4'>
                      <div className='w-[1120px] h-[420px] bg-white rounded-xl'>
                        <div className='p-6'>
                          <p>Question {qIndex + 1}: {q.question}</p>
                        </div>
                        <div className='p-6'>
                          {q.choices.map((choice, choiceIndex) => (
                            <div
                              key={choiceIndex}
                              className={`mb-2 cursor-pointer ${selectedAnswers[qIndex] === choiceIndex ? 'bg-blue-500 text-white' : ''}`}
                              onClick={() => handleAnswerClick(qIndex, choiceIndex)}
                            >
                              <p>{choice}</p>
                            </div>
                          ))}
                        </div>
                        {showAnswers[qIndex] && (
                          <div className='p-6'>
                            <p>The correct answer is: {q.answer}</p>
                          </div>
                        )}
                        <div className='p-6'>
                          <button
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            onClick={() => handleShowAnswer(qIndex)}
                          >
                            Show Answer
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );

            case 'match':
              return (
                <div key={index} className='pt-6'>
                  <p className='text-[24px] text-[#966ded] font-semibold pb-4'>Match the Following</p>
                  <div className='w-[1120px] bg-white rounded-t-xl p-8'>
                    <div className='flex'>
                      <div className='flex-1'>
                        {section.column1.map((item, idx) => (
                          <div key={idx} className='mb-2'>{item}</div>
                        ))}
                      </div>
                      <div className='flex-1'>
                        {shuffledColumn2.map((item, idx) => (
                          <div key={idx} className='mb-2'>{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-[1120px] rounded-b-lg'
                      onClick={handleRearrange}
                    >
                      Rearrange
                    </button>
                  </div>
                </div>
              );

            case 'shortAnswer':
              return (
                <div key={index} className='pt-6'>
                  <p className='text-[24px] text-[#966ded] font-semibold pb-4'>Short Answer Questions</p>
                  {section.questions.map((q, qIndex) => (
                    <div key={qIndex} className='mb-4'>
                      <div className='w-[1120px] bg-white rounded-xl p-6'>
                        <p>{q.question}</p>
                        <button
                          className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                          onClick={() => handleShowShortAnswer(qIndex)}
                        >
                          Show Answer
                        </button>
                        {showShortAnswers[qIndex] && (
                          <p className='mt-4'>Answer: {q.answer}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              );

            case 'passages':
              return (
                <div key={index} className='pt-6'>
                  <p className='text-[24px] text-[#966ded] font-semibold pb-4'>Passages</p>
                  <div className='w-[1120px] bg-white rounded-xl p-6'>
                    {section.passages.map((passage, pIndex) => (
                      <p key={pIndex} className='mb-2'>{passage}</p>
                    ))}
                  </div>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default ChoicMatchShort;