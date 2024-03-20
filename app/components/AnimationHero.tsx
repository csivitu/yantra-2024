"use client"
import React, { useEffect } from 'react';

interface AnimationProps {
  rowNumber: number
}

const luminanceRating = '`.-\':_,^=;><+!rc*/z?sLTv)J7(|FiCfI31tluneoxjyawk694pGUKH8D$gMW%@';

function generateString(desiredLuminance: number, numChars: number): string {
  const len = luminanceRating.length;
  const step = Math.floor(len / 12); // Divide the string into 12 parts
  const start = step * (desiredLuminance - 1); // Calculate the start index
  const end = start + step; // Calculate the end index

  let result = '';
  for (let i = 0; i < numChars; i++) {
    const randomIndex = Math.floor(Math.random() * (end - start + 1)) + start;
    result += luminanceRating[randomIndex];
  }

  return result;
}

const AnimationHero = (props: AnimationProps) => {
  const [line, setLine] = React.useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const newString = generateString(props.rowNumber, 600);
      setLine(newString);
    },50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='w-full flex justify-between text-[#0281F0] opacity-50 whitespace-nowrap font-mono'>
      {line}
    </div>
  )
};

export default AnimationHero;
