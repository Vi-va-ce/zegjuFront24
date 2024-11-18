import React, { useState, useEffect } from 'react';
import { pcex, mobex, bpt } from '../../assets';

function PracticeQuestion({ selectedChapterIndex, chapters, subject }) {
const [boxVisible, setBoxVisible] = useState();
const [imageVisible, setImageVisible] = useState(true);
const [selectedExplanationIndex, setSelectedExplanationIndex] = useState(null);
const [explanationVisible, setExplanationVisible] = useState({});
const [pppButtonIndex, setPppButtonIndex] = useState(-1);

const handleBackgroundClick = (realIndex) => {
setBoxVisible(realIndex === selectedExplanationIndex ? false : true);
setImageVisible(realIndex === selectedExplanationIndex ? true : false);
setSelectedExplanationIndex(realIndex === selectedExplanationIndex ? null : realIndex);
setExplanationVisible((prevVisible) => ({
...prevVisible,
[realIndex]: realIndex === selectedExplanationIndex ? false : true,
}));
};

const handleImageClick = (realIndex) => {
setBoxVisible(true);
setImageVisible(realIndex === selectedExplanationIndex ? false : true);
setSelectedExplanationIndex(realIndex === selectedExplanationIndex ? null : realIndex);
setExplanationVisible((prevVisible) => ({
...prevVisible,
[realIndex]: realIndex === selectedExplanationIndex ? false : true,
}));
setImageVisible(false)
};
console.log(subject)

const currentChapter = chapters[selectedChapterIndex];
const { questions } = currentChapter || {};

const [currentPage, setCurrentPage] = useState(0);
const questionsPerPage = 3;
const startIndex = currentPage * questionsPerPage;
const endIndex = startIndex + questionsPerPage;
const currentQuestions = questions && questions.slice(startIndex, endIndex);
const [selectedChoices, setSelectedChoices] = useState({});
const [selectedRealIndices, setSelectedRealIndices] = useState([]);


const handleNextClick = () => {
setCurrentPage(currentPage + 1);
};

const handlePreviousClick = () => {
setCurrentPage(currentPage - 1);
};

const questionCount = currentQuestions ? currentQuestions.length : 0;
const handleChoiceClick = (questionIndex, choice) => {
  const realIndex = startIndex + questionIndex;
  const chapterIndex = selectedChapterIndex;

  setSelectedChoices((prevChoices) => {
    const newChoices = {
      ...prevChoices,
      [`${chapterIndex}-${realIndex}`]: choice,
    };

    // Collect the real indices in an array
    const newSelectedRealIndices = Object.keys(newChoices)
      .map((key) => parseInt(key.split('-')[1]))
      .filter((index) => !isNaN(index));

    // Update the selectedRealIndices state
    setSelectedRealIndices(newSelectedRealIndices);

    return newChoices;
  });

  const question = currentQuestions[questionIndex];
  const explanation = question.explanation;
};
useEffect(() => {
const savedSelectedChoices = localStorage.getItem('selectedChoices');
if (savedSelectedChoices) {
setSelectedChoices(JSON.parse(savedSelectedChoices));
}
}, [])
;
useEffect(() => {
  // Set the pppButtonIndex to the selectedRealIndices array
  setPppButtonIndex(selectedRealIndices);
}, [selectedRealIndices]);

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
              <div
                className={`bg-violet-500 md:w-[1120px] w-[360px] md:h-[80px] h-[48px] cursor-pointer ${
                  boxVisible && realIndex === selectedExplanationIndex ? 'block' : 'hidden'
                }`}
                onClick={() => handleBackgroundClick(realIndex)}
              >
                {boxVisible && realIndex === selectedExplanationIndex && (
                  <div className='flex'>
                    <p className='text-white md:pl-[500px] pl-[130px] md:pt-[30px] pt-[20px] md:text-[25px] text-[16px]'>Explanation</p>
                    <img src={bpt} className='md:pl-[440px] pl-[100px] md:pt-[-20px] pt-[10px]' />
                  </div>
                )}
              </div>
              {imageVisible && pppButtonIndex.includes(realIndex) && (
  <button onClick={() => handleImageClick(realIndex)}>
    <img
      src={mobex}
      className="md:hidden" // Hide the image on medium-sized screens and larger
      alt='pppButton'
    />
    <img
      src={pcex}
      className="hidden md:block" // Show the image on medium-sized screens and larger
      alt='pppButton'
    />
  </button>
)}
            </div>
            <div className='md:p-[32px] p-[15px]'>
              {explanationVisible[realIndex] ? (
                <p className='md:text-[19px] text-[13px]'>{question.explanation}</p>
              ) : (
                <>
                    <p className='md:text-[19px] text-[13px]'>{realIndex + 1}. {question.subChapterQuestionText}</p>
                    <div className='md:pl-12 pl-4 md:pt-8 pt-3'>
                      {/* Render the choices for the question */}
                      {Object.entries(question.choices[0]).map(([choiceKey, choiceValue]) => {
                        // Calculate the real index of the choice
                        const realChoiceIndex = realIndex * question.choices[0].length + parseInt(choiceKey);

                        return (
                          <>
                            <div className='flex' key={choiceKey}>
                              <button
                                className={`rounded-full border-2 ${
                                  selectedChoices[`${chapterIndex}-${realIndex}`] === choiceKey
                                    ? isCorrect
                                      ? 'bg-teal-300'
                                      : 'bg-rose-700'
                                    : 'border-teal-400'
                                } w-6 h-6`}
                                style={{ minWidth: '24px' }}
                                onClick={() => handleChoiceClick(index, choiceKey)}
                                disabled={selectedChoices[`${chapterIndex}-${realIndex}`] !== undefined}
                              ></button>
                              <p className='md:text-[18px] text-[12px] md:pl-2 pl-4'>{choiceValue}</p>
                            </div>
                            <br />
                          </>
                        );
                      })}
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
          disabled={currentPage === 0} // Disable the button on the first page
        >
          <p className='md:text-white text-white md:text-[20px] text-[16px]'>Previous</p>
        </button>
      </div>

      <div className='md:pr-[90px] pr-[20px]'>
        {/* Render the Next button */}
        <button
          className='bg-violet-500 md:w-[127px] w-[66px] md:h-[32px] h-[24px] md:rounded-md'
          onClick={handleNextClick}
          disabled={questions && endIndex >= questions.length} // Disable the button on the last page
        >
          <p className='md:text-white text-white md:text-[20px] text-[16px]'>Next</p>
        </button>
      </div>
    </div>
  </>
);
}

export default PracticeQuestion;