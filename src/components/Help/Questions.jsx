import React, { useState } from 'react';

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: 'why is it only the SAT exam I can access, why are the other exams unavailable?',
      answer: 'This is a beta version of our platform; only the SAT practicing tool is available for now; all the other features are going through development and will be available soon.',
    },
    {
      question: 'How does the platform help me prepare for exams?',
      answer: 'Our platform provides a wide range of study materials, practice tests, and quizzes tailored to various subjects and exam types. You can access comprehensive study guides, review notes, and interactive practice questions to enhance your exam preparation.',
    },
    {
      question: 'How to I make the payment?',
      answer: 'Select the logo of the bank you want to make the payment with, and according to the information that is going to appear on the top box, make the payment and upload a screenshot of the completed transaction. ',
    },
    {
      question: 'Can I track my progress and performance on the platform?',
      answer: 'Our platform offers personalized progress tracking features, allowing you to monitor your performance and identify areas for improvement. You can view detailed analytics, review past performance, and adjust your study strategy accordingly.',
    },
  
    
  ];

  return (
    <div className='pl-[40px] md:pl-[130px] pr-[40px] md:pr-[130px] pb-[40px]'>
    <div className="bg-gray-200 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-lg cursor-pointer ${
              activeIndex === index ? 'bg-gray-100' : ''
            }`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="font-semibold">{q.question}</div>
            {activeIndex === index && <div className="mt-2">{q.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Questions;