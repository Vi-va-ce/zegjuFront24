import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNote from './SideNote';
import Sidenote2 from './Sidenote2';
import MainNote from './MainNote';
import Loader from '../../Loader';

function NotesPrem({ subjectName, message }) {
  const [chapters, setChapters] = useState([]);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);
  const [selectedSubchapterIndex, setSelectedSubchapterIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (message === "full") {
          response = await axios.post(
            'v10/student/GetNotePremiumPaid',
            {
              subjectId: subjectName,
            }
          );
        } else {
          response = await axios.post(
            'v10/student/GetNoteFree',
            {
              subjectId: subjectName,
            }
          );
        }
        setChapters(response.data.chapters);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [subjectName, message]);

  const handleChapterSelect = (chapterIndex, subchapterIndex) => {
    setSelectedChapterIndex(chapterIndex);
    setSelectedSubchapterIndex(subchapterIndex);
  };

  const subchapterNote = chapters.flatMap((chapter, chapterIndex) =>
    chapter.subchapters.map((subchapter, subchapterIndex) => ({
      chapterIndex,
      subchapterIndex,
      Note: subchapter.subchapterNote,
    }))
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div><Loader /></div>
      </div>
    );
  }

  return (
    <div className="md:flex bg-blue-100 min-h-screen">
      <div className="hidden md:block">
        <SideNote subjectName={subjectName} chapters={chapters} onChapterSelect={handleChapterSelect} />
      </div>
      <div className="md:hidden absolute">
        <Sidenote2 chapters={chapters} onChapterSelect={handleChapterSelect} />
      </div>
      <div className=''>
      <MainNote
  subjectName={subjectName}
  subchapterNote={subchapterNote}
  selectedChapterIndex={selectedChapterIndex}
  selectedSubchapterIndex={selectedSubchapterIndex}
/>

      </div>
    </div>
  );
}

export default NotesPrem;