import React, { useState, useEffect } from 'react';
import Profile from './profile';

function Profilemain() {
  const [profileData, setProfileData] = useState(null);
  const url = 'https://9473c482-b4ad-4db4-a855-c1b1a530a656.mock.pstmn.io/api/v1/student/studentProfile';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {profileData ? (
        <Profile
          standardFirstName={profileData.firstName}
          standardlastName={profileData.lastName}
          stndardpicture={profileData.picture}
          satEnglish={profileData.scores.satEnglish}
          satMath={profileData.scores.satMath}
          average={profileData.scores.average}
        />
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Profilemain;