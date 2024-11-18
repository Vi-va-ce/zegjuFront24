import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Box5 from './Box5';
import Box6 from './Box6';

function Homepage3({ SatData, onClickButton, FreshData,onClickButton2 }) {
  return (
    <div className="">
      <div className="ml-[100px] md:ml-[350px] mt-[20px]">
        <div className="w-[155.77px] h-[39.46px] md:w-[588.26px] md:h-[80px] text-center text-black text-base md:text-4xl font-bold font-['Arial'] leading-tight">
          Enhance your capacity with Zegju
        </div>
      </div>
      <div className="flex">
        <div className="ml-8 md:ml-[230px] mt-4 ">
          <Box1 SatData={SatData} onClickButton={onClickButton} />
        </div>
        <div className="ml-3 md:ml-16 mt-4">
          <Box2 FreshData={FreshData}  onClickButton2={ onClickButton2} />
        </div>
        <div className="ml-3 md:ml-16 mt-4">
          <Box3 />
        </div>
      </div>
      <div className="flex">
        <div className="ml-8 md:ml-[230px] mt-4  md:mt-12 ">
          <Box4 />
        </div>
        <div className="ml-3 md:ml-16 mt-4  md:mt-12">
          <Box5 />
        </div>
        <div className="ml-3 md:ml-16 mt-4  md:mt-12">
          <Box6 />
        </div>
      </div>
    </div>
  );
}

export default Homepage3;