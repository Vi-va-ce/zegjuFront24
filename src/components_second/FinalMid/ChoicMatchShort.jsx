import React, { useEffect, useState } from 'react';
import SubjectBar from '../Basic/Subject_bar/SubjectBar';
import { useLocation } from 'react-router-dom';

function ChoiceMatchShort() {
  const location = useLocation();
  const data = location.state?.data;
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [showShortAnswers, setShowShortAnswers] = useState({});
  const [shuffledColumn2, setShuffledColumn2] = useState([]);
  const [originalColumn2, setOriginalColumn2] = useState([]);
  const [sections, setSections] = useState([]);
  const [isRearrangeDisabled, setIsRearrangeDisabled] = useState(false);
  const [showWatermark, setShowWatermark] = useState(false);
  const [clipboardData, setClipboardData] = useState('');

  useEffect(() => {
    if (data) {
      setSections(data);

      const matchSection = data.find(section => section.type === 'match');
      if (matchSection) {
        setOriginalColumn2(matchSection.column2);
        setShuffledColumn2(shuffleArray(matchSection.column2));
      }
    }
  }, [data]);

  useEffect(() => {
    const handleClipboard = async (event) => {
      const clipboardItems = await navigator.clipboard.read();
      for (const item of clipboardItems) {
        const types = item.types;

        // Check if any image type is present
        if (types.includes('image/png') || types.includes('image/jpeg')) {
          setShowWatermark(true); // Show watermark when an image is detected
          break;
        }
      }
    };

    // Add clipboard event listener
    window.addEventListener('paste', handleClipboard);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('paste', handleClipboard);
    };
  }, []);

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

  const handleRearrange = () => {
    setShuffledColumn2(originalColumn2);
    setIsRearrangeDisabled(true);
  };

  const orderedSections = [
    sections.find(section => section.type === 'True or False'),
    sections.find(section => section.type === 'multipleChoice'),
    sections.find(section => section.type === 'match'),
    sections.find(section => section.type === 'shortAnswer')
  ].filter(Boolean);

  let questionCounter = 1;

  return (
    <div className='min-h-screen h-auto bg-blue-100 flex flex-col items-center justify-center pb-8'>
      <SubjectBar />
      <div className='w-full max-w-3xl px-4'>
        {orderedSections.map((section, sectionIndex) => {
          switch (section.type) {
            case 'True or False':
              return (
                <div key={sectionIndex} className='pt-6'>
                  <p className='md:text-[24px] text-[16px] text-[#966ded] font-semibold pb-4 text-center'>
                    True or False Questions
                  </p>
                  {section.questions.map((q, qIndex) => (
                    <div key={qIndex} className='mb-4'>
                      <div className='bg-white rounded-xl md:p-6 p-3 overflow-auto shadow-md'>
                        <p>Question {questionCounter++}: {q.question}</p>
                        {showAnswers[qIndex] && (
                          <p className='mt-4'>The correct answer is: {q.answer}</p>
                        )}
                        <div className='mt-4'>
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

            case 'multipleChoice':
              return (
                <div key={sectionIndex} className='pt-6'>
                  <p className='text-[24px] text-[#966ded] font-semibold text-center'>
                    Choose The Best Answer
                  </p>
                  {section.questions.map((q, qIndex) => (
                    <div key={qIndex} className='pt-4'>
                      <div className='bg-white rounded-xl overflow-auto shadow-md'>
                        <div className='md:p-6 p-3'>
                          <p>Question {questionCounter++}: {q.question}</p>
                        </div>
                        <div className='md:p-6 p-3'>
                          {q.choices.map((choice, choiceIndex) => (
                            <div
                              key={choiceIndex}
                              className={`mb-2 cursor-pointer ${selectedAnswers[qIndex] === choiceIndex ? 'bg-blue-300 text-white' : ''}`}
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
                <div key={sectionIndex} className='pt-6'>
                  <p className='text-[24px] text-[#966ded] font-semibold pb-4 text-center'>
                    Match the Following
                  </p>
                  <div className='bg-white rounded-t-xl p-8 overflow-auto shadow-md'>
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
                      className={`bg-blue-500 text-white font-bold py-2 w-full rounded-b-lg ${isRearrangeDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                      onClick={handleRearrange}
                      disabled={isRearrangeDisabled}
                    >
                      Rearrange
                    </button>
                  </div>
                </div>
              );

            case 'shortAnswer':
              return (
                <div key={sectionIndex} className='pt-6'>
                  <p className='text-[24px] text-[#966ded] font-semibold pb-4 text-center'>
                    Short Answer Questions
                  </p>
                  {section.questions.map((q, qIndex) => (
                    <div key={qIndex} className='mb-4'>
                      <div className='bg-white rounded-xl p-6 overflow-auto shadow-md'>
                        <p>Question {questionCounter++}: {q.question}</p>
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

            default:
              return null;
          }
        })}
      </div>

      {/* Watermark */}
      {showWatermark && (
        <div className="fixed bottom-0 right-0 p-4 text-sm text-gray-400 opacity-50">
          Watermark
        </div>
      )}
    </div>
  );
}

export default ChoiceMatchShort;