import React from 'react';

interface RateButtonProps {
  label: string;
}

const RateButton = ({ label }: RateButtonProps) => {
  return (
    <div className=' w-[145px]  h-[54px] my-auto rounded-lg flex justify-center items-center text-gray-400 text-[18px]'>
      <p>{label}</p>
    </div>
  );
}

export default RateButton; 