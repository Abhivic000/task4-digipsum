import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CustomCircularProgressBar = () => {
  const percentage = 100;
  const segments = [
    { value: 55, color: '#6fa8dc' },
    { value: 55, color: '#ff1100' },
    { value: 25, color: '#0b5394' }, 
    { value: 25, color: '#ffb900' }, 
  ];

  const rotations = [0.75, 0.5, 0.25, 1.0];
  const adjustedPercentages = segments.map(segment => segment.value * (percentage / 100));

  return (
    <div className="relative w-40 h-40 mx-auto">
      {segments.map((segment, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{ transform: `rotate(${rotations[index] * 360}deg)` }}
        >
          <CircularProgressbar
            value={adjustedPercentages[index]}
            styles={buildStyles({
              rotation: rotations[index],
              strokeLinecap: 'butt',
              pathColor: segment.color,
              trailColor: 'transparent',
            })}
          />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-lg">800 MB</p>
        <p className="text-sm text-gray-500">Free up space</p>
      </div>
    </div>
  );
};

export default CustomCircularProgressBar;
