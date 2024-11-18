import React, { useState, useEffect } from 'react';
import { pcex, mobex, bpt } from '../../../assets';

function PracticeQuestion({ selectedChapterIndex, chapters, subject, resetTrigger }) {
  const [boxVisible, setBoxVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);
  const [selectedExplanationIndex, setSelectedExplanationIndex] = useState(null);
  const [explanationVisible, setExplanationVisible] = useState({});
  const [pppButtonIndex, setPppButtonIndex] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [selectedRealIndices, setSelectedRealIndices] = useState([]);

  const questionsPerPage = 3;
  const currentChapter = chapters[selectedChapterIndex];
  const { questions } = currentChapter || {};
  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = questions && questions.slice(startIndex, endIndex);

  const getUniqueKey = (chapterIndex, questionIndex) => `${chapterIndex}-${questionIndex}`;

  const handleBackgroundClick = (chapterIndex, questionIndex) => {
    const uniqueKey = getUniqueKey(chapterIndex, questionIndex);
    const isSelected = uniqueKey === selectedExplanationIndex;
    setBoxVisible(!isSelected);
    setImageVisible(isSelected);
    setSelectedExplanationIndex(isSelected ? null : uniqueKey);
    setExplanationVisible((prevVisible) => ({
      ...prevVisible,
      [uniqueKey]: !isSelected,
    }));
  };

  const handleImageClick = (chapterIndex, questionIndex) => {
    const uniqueKey = getUniqueKey(chapterIndex, questionIndex);
    setBoxVisible(true);
    setImageVisible(false);
    setSelectedExplanationIndex(uniqueKey);
    setExplanationVisible((prevVisible) => ({
      ...prevVisible,
      [uniqueKey]: true,
    }));
  };

  const handleChoiceClick = (questionIndex, choice) => {
    const chapterIndex = selectedChapterIndex;
    const uniqueKey = getUniqueKey(chapterIndex, questionIndex);

    setSelectedChoices((prevChoices) => {
      const newChoices = {
        ...prevChoices,
        [uniqueKey]: choice,
      };

      const newSelectedRealIndices = Object.keys(newChoices)
        .map((key) => parseInt(key.split('-')[1]))
        .filter((index) => !isNaN(index));

      setSelectedRealIndices(newSelectedRealIndices);
      return newChoices;
    });
  };

  useEffect(() => {
    const savedSelectedChoices = localStorage.getItem('selectedChoices');
    if (savedSelectedChoices) {
      setSelectedChoices(JSON.parse(savedSelectedChoices));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedChoices', JSON.stringify(selectedChoices));
    setPppButtonIndex(selectedRealIndices);
  }, [selectedChoices, selectedRealIndices]);

  useEffect(() => {
    resetState(); // Reset state when resetTrigger changes
  }, [resetTrigger]);

  const resetState = () => {
    setBoxVisible(false);
    setImageVisible(true);
    setSelectedExplanationIndex(null);
    setExplanationVisible({});
    setSelectedChoices({});
    setSelectedRealIndices([]);
    setCurrentPage(0);
  };

  const handleNextClick = () => {
    if (questions && endIndex < questions.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      {currentQuestions &&
        currentQuestions.map((question, index) => {
          const questionIndex = startIndex + index;
          const chapterIndex = selectedChapterIndex;
          const uniqueKey = getUniqueKey(chapterIndex, questionIndex);
          const selectedChoice = selectedChoices[uniqueKey];
          const isCorrect = selectedChoice === question.answer;

          return (
            <div className='flex items-center justify-center w-screen pt-6' key={uniqueKey}>
              <div className='md:w-[1120px] md:h-[520px] w-[361px] h-[392px] bg-white overflow-auto rounded-lg'>
                <div>
                  <div
                    className={`bg-violet-500 md:w-[1120px] w-[360px] md:h-[80px] h-[48px] cursor-pointer ${
                      boxVisible && uniqueKey === selectedExplanationIndex ? 'block' : 'hidden'
                    }`}
                    onClick={() => handleBackgroundClick(chapterIndex, questionIndex)}
                  >
                    {boxVisible && uniqueKey === selectedExplanationIndex && (
                      <div className='flex'>
                        <p className='text-white md:pl-[500px] pl-[130px] md:pt-[30px] pt-[20px] md:text-[25px] text-[16px]'>Explanation</p>
                        <img src={bpt} className='md:pl-[440px] pl-[100px] md:pt-[-20px] pt-[10px]' alt='icon' />
                      </div>
                    )}
                  </div>
                  {imageVisible && pppButtonIndex.includes(questionIndex) && (
                    <button onClick={() => handleImageClick(chapterIndex, questionIndex)}>
                      <img src={mobex} className="md:hidden" alt='pppButton' />
                      <img src={pcex} className="hidden md:block" alt='pppButton' />
                    </button>
                  )}
                </div>
                <div className='md:p-[32px] p-[15px]'>
                  {explanationVisible[uniqueKey] ? (
                    <p className='md:text-[19px] text-[13px]'>{question.explanation}</p>
                  ) : (
                    <>
                      <p className='md:text-[19px] text-[13px]'>{questionIndex + 1}. {question.subChapterQuestionText}</p>
                      <div className='md:pl-12 pl-4 md:pt-8 pt-3'>
                        {Object.entries(question.choices[0]).map(([choiceKey, choiceValue]) => (
                          <div className='flex pt-2' key={choiceKey}>
                            <button
                              className={`rounded-full border-2 ${
                                selectedChoices[uniqueKey] === choiceKey
                                  ? isCorrect
                                    ? 'bg-teal-300'
                                    : 'bg-rose-700'
                                  : 'border-teal-400'
                              } w-6 h-6`}
                              style={{ minWidth: '24px' }}
                              onClick={() => handleChoiceClick(questionIndex, choiceKey)}
                              disabled={selectedChoices[uniqueKey] !== undefined}
                            ></button>
                            <p className='md:text-[18px] text-[12px] md:pl-2 pl-4'>{choiceValue}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      <div className='flex justify-between items-center md:pt-12 pt-6 md:pb-12 pb-6'>
        <div className='md:pl-[100px] pl-[35px]'>
          <button
            className='bg-violet-500 md:w-[127px] w-[66px] md:h-[32px] h-[24px] md:rounded-md'
            onClick={handlePreviousClick}
            disabled={currentPage === 0}
          >
            <p className='md:text-white text-white md:text-[20px] text-[16px]'>Previous</p>
          </button>
        </div>

        <div className='md:pr-[90px] pr-[20px]'>
          <button
            className='bg-violet-500 md:w-[127px] w-[66px] md:h-[32px] h-[24px] md:rounded-md'
            onClick={handleNextClick}
            disabled={questions && endIndex >= questions.length}
          >
            <p className='md:text-white text-white md:text-[20px] text-[16px]'>Next</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default PracticeQuestion;
