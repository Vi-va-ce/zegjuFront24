import React, { useState, useEffect } from 'react';

function Choices({ data, currentIndex }) {
  const [choices, setChoices] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (
      data &&
      data.sections &&
      data.sections[currentIndex] &&
      data.sections[currentIndex].question_group &&
      data.sections[currentIndex].question_group[0] &&
      data.sections[currentIndex].question_group[0].question_types &&
      data.sections[currentIndex].question_group[0].question_types[0]
    ) {
      const question = data.sections[currentIndex].question_group[0].question_types[0].questions[currentIndex];
      const questionChoices = question.choices.map(choice => choice.choose_text);
      setChoices(questionChoices);
    }
  }, [data, currentIndex]);

  useEffect(() => {
    (selected);
  }, [selected]);

  const handleClick = async (choice) => {
    if (choice === selected) {
      // If the clicked choice is the same as the currently selected choice,
      // deselect it (allow the user to change their answer)
      setSelected('');
    } else {
      setSelected(choice);

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
        const question = data.sections[currentIndex].question_group[0].question_types[0].questions[currentIndex];

        // Prepare the data to be sent in the POST request
        const postData = {
          test_id: data.test_id,
          user_id: data.user_id,
          section_id: data.sections[currentIndex].section_id,
          question_id: question.question_id,
          answer: choice,
        };

        try {
          // Make the POST request to the API
          const response = await fetch('https://04390f3e-b5f3-469e-8f72-f5ef3c667b14.mock.pstmn.io', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          });

          if (response.ok) {
            // Handle the successful response
            ('Data posted successfully.');
          } else {
            // Handle the error response
            ('Failed to post data.');
          }
        } catch (error) {
          // Handle any network or other errors
          ('Error:', error);
        }
      } else {
        console.log('Question data not found.');
      }
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='shortchoose-size mb-2'>
        <div className='mb-2'>Choose the correct answer</div>
      </div>
      <ul>
        {choices.map((choice, index) => (
          <li key={index}>
            <button onClick={() => handleClick(choice)}>
              <div className={`shortchoose-size mb-2 hover:bg-gray-200 ${selected === choice ? 'bg-gray-200' : ''}`}>
                <p className='font-semibold items-center'>{choice}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Choices;