import React from 'react';
import ProfileMap from './ProfileMap';
import FirstMapDiagno from './FirstMapDiagno';
import DiagnosticTestMap from './DiagnosticTestMap';
import SecondMapPractice from './SecondMapPractice';
import PracticeTestMap from './PracticeTestMap';
import ThirdMapDiagno from './ThirdMapDiagno';
import FinalTestMap from './FinalTestMap';

function Maps({ data }) { // Accept data as a prop
  return (
    <div>
      <ProfileMap />
      {data && (
        <>
          <FirstMapDiagno data={data} />
          <DiagnosticTestMap data={data.diagnosticTest} />
          <SecondMapPractice data={data} />
          <PracticeTestMap data={data.practiceTest} />
          <ThirdMapDiagno data={data} />
          <FinalTestMap data={data.finalTest} />
        </>
      )}
    </div>
  );
}

export default Maps;
