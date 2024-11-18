import React, { useState, useEffect, useRef } from 'react';
import { ham, Zegeju } from '../../assets';
import SideNote from './SideNote';

function Sidenote2({ chapters, onChapterSelect }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const sidenoteRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (sidenoteRef.current && !sidenoteRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    if (menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <>
      <nav className='flex justify-between gap-x-60 items-center'>
        <div className='pt-[38px] pl-4'>
          <img
            className={`w-[28px] h-[26px] ${menuVisible ? 'filter-invert' : ''}`}
            src={ham}
            onClick={toggleMenu}
          />
        </div>

        <div className='pt-[30px] mr-[20px]'>
          <img className="w-[80px] h-[45px]" src={Zegeju} />
        </div>
      </nav>

      {menuVisible && (
        <div className='fixed mt-[-70px]' ref={sidenoteRef}>
          <SideNote
            chapters={chapters}
            onChapterSelect={onChapterSelect}
          />
        </div>
      )}
    </>
  );
}

export default Sidenote2;
