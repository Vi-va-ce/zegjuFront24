import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from './Box';


function Subject_Menu({ subjectNames, onNoteButtonClick,onPracticeButtonClick,onExamButtonClick }) {
  const getRandomColor = () => {
    const colors = ['text-yellow-500', 'text-teal-500', 'text-green-500', 'text-teal-900', 'text-blue-800', 'text-purple-500'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className='flex justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {subjectNames.map((subject, index) => (
          <Box
            key={index}
            Subject_name={subject}
            textClass={getRandomColor()}
            onNoteButtonClick={onNoteButtonClick}
            onPracticeButtonClick={onPracticeButtonClick}
            onExamButtonClick={onExamButtonClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Subject_Menu;