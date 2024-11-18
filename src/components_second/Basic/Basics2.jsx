import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubjectBar from './Subject_bar/SubjectBar';
import Subject_Menu from './Subject_Menu';
import Practice from '../Practice/Practice';
import Loader from '../../Loader';
import Subject_Menu2 from './Subject_Menu2';

function Basics2({ onNoteButtonClick, onPracticeButtonClick ,onExamButtonClick}) {
  const [subjectNames, setSubjectNames] = useState([]);
  const [filteredSubjectNames, setFilteredSubjectNames] = useState([]);
  const [selectedSubjectP, setSelectedSubjectP] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const subjectsPerPage = 9;
  const [isMdOrAbove, setIsMdOrAbove] = useState(window.innerWidth >= 768);

  useEffect(() => {
    axios
      .get('v10/student/GetSubjectsPaid')
      .then(response => {
        const { data } = response;
        const fetchedSubjects = data['Subject-name'];
        const additionalSubjects = [
         
        ];
        const combinedSubjects = [...fetchedSubjects, ...additionalSubjects];
        setSubjectNames(combinedSubjects);
        setFilteredSubjectNames(combinedSubjects);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const savedSubject = localStorage.getItem('selectedSubjectP');
    if (savedSubject) {
      setSelectedSubjectP(savedSubject);
    }
  }, []);

  useEffect(() => {
    setFilteredSubjectNames(
      subjectNames.filter(subject =>
        subject.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, subjectNames]);

  useEffect(() => {
    const handleResize = () => {
      setIsMdOrAbove(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredSubjectNames.length / subjectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * subjectsPerPage;
  const paginatedSubjects = filteredSubjectNames.slice(startIndex, startIndex + subjectsPerPage);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div><Loader /></div>
      </div>
    );
  }

  return (
    <div className='min-h-screen h-auto bg-blue-100 flex flex-col'>
      <div>
        <SubjectBar />
      </div>

      <div className='flex-1 px-4 md:px-16'>
        <div className='flex items-center justify-between'>
          <p className='text-[18px] md:text-[40px] text-green-600'>Select course</p>
          <div className='pr-4 '>
            <div className='relative'>
              <svg className='absolute left-3 top-1/2 transform -translate-y-1/2' width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search courses"
                className='md:w-[368px] w-[172px]  h-[48px] md:h-[24px] pl-10 pr-4 border border-gray-300 rounded-[40px] bg-[rgba(232,232,232,1)] opacity-1'
              />
            </div>
          </div>
        </div>

        <div className='flex-1 py-4 md:py-12'>
          <Subject_Menu2
            subjectNames={isMdOrAbove ? paginatedSubjects : filteredSubjectNames}
            onNoteButtonClick={onNoteButtonClick}
            onPracticeButtonClick={onPracticeButtonClick}
            onExamButtonClick={onExamButtonClick}
          />
        </div>

        {isMdOrAbove && (
          <div className='flex justify-between items-center pb-4'>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className='px-4 py-2 bg-green-400 text-white rounded disabled:opacity-50'
            >
              Prev
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(filteredSubjectNames.length / subjectsPerPage)}
              className='px-4 py-2 bg-green-400 text-white rounded disabled:opacity-50'
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Basics2;