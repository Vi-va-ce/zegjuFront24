import React, { useState, useEffect } from 'react';
import { pcex, mobex } from '../../../assets';

function PracticeQuestion({ selectedChapterIndex, chapters, subject, onCorrectCount }) {
  const [boxVisible, setBoxVisible] = useState();
  const [imageVisible, setImageVisible] = useState(false);
  const [pppButtonIndex, setPppButtonIndex] = useState([]);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [selectedRealIndices, setSelectedRealIndices] = useState([]);

  const currentChapter = chapters[selectedChapterIndex];
  const { questions } = currentChapter || {};
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 3;
  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = questions && questions.slice(startIndex, endIndex);

  useEffect(() => {
    const savedSelectedChoices = localStorage.getItem('selectedChoices');
    if (savedSelectedChoices) {
      setSelectedChoices(JSON.parse(savedSelectedChoices));
    }
  }, []);

  useEffect(() => {
    setPppButtonIndex(selectedRealIndices);
  }, [selectedRealIndices]);

  useEffect(() => {
    const correctCount = Object.entries(selectedChoices).reduce((count, [key, choice]) => {
      const [chapterIndex, realIndex] = key.split('-').map(Number);
      const question = chapters[chapterIndex]?.questions[realIndex];
      if (question && question.answer === choice) {
        return count + 1;
      }
      return count;
    }, 0);
    onCorrectCount(correctCount);
  }, [selectedChoices, chapters, onCorrectCount]);

  const handleChoiceClick = (questionIndex, choice) => {
    const realIndex = startIndex + questionIndex;
    const chapterIndex = selectedChapterIndex;

    setSelectedChoices((prevChoices) => {
      const newChoices = {
        ...prevChoices,
        [`${chapterIndex}-${realIndex}`]: choice,
      };

      const newSelectedRealIndices = Object.keys(newChoices)
        .map((key) => parseInt(key.split('-')[1]))
        .filter((index) => !isNaN(index));

      setSelectedRealIndices(newSelectedRealIndices);

      return newChoices;
    });
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {currentQuestions &&
        currentQuestions.map((question, index) => {
          const realIndex = startIndex + index;
          const chapterIndex = selectedChapterIndex;
          const selectedChoice = selectedChoices[`${chapterIndex}-${realIndex}`];
          const isCorrect = selectedChoice === question.answer;

          return (
            <div className='flex items-center justify-center w-screen pt-6' key={index}>
              <div className='md:w-[1120px] md:h-[520px] w-[361px] h-[392px] bg-white overflow-auto rounded-lg'>
                <div>
                  {imageVisible && pppButtonIndex.includes(realIndex) && (
                    <button onClick={() => setImageVisible(false)}>
                      <img
                        src={mobex}
                        className="md:hidden"
                        alt='pppButton'
                      />
                      <img
                        src={pcex}
                        className="hidden md:block"
                        alt='pppButton'
                      />
                    </button>
                  )}
                </div>
                <div className='md:p-[32px] p-[15px]'>
                  <p className='md:text-[19px] text-[13px]'>{realIndex + 1}. {question.subChapterQuestionText}</p>
                  <div className='md:pl-12 pl-4 md:pt-8 pt-3'>
                    {Object.entries(question.choices[0]).map(([choiceKey, choiceValue]) => (
                      <div className='flex pt-2' key={choiceKey}>
                        <button
                          className={`rounded-full border-2 ${
                            selectedChoices[`${chapterIndex}-${realIndex}`] === choiceKey
                              ? isCorrect
                                ? 'bg-teal-300'
                                : 'bg-teal-300'
                              : 'border-teal-400'
                          } w-6 h-6`}
                          style={{ minWidth: '24px' }}
                          onClick={() => handleChoiceClick(index, choiceKey)}
                          disabled={selectedChoices[`${chapterIndex}-${realIndex}`] !== undefined}
                        ></button>
                        <p className='md:text-[18px] text-[12px] md:pl-2 pl-4'>{choiceValue}</p>
                      </div>
                    ))}
                  </div>
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