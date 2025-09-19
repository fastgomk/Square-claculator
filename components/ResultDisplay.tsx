
import React from 'react';

interface ResultDisplayProps {
  area: number | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ area }) => {
  if (area === null) {
    return null;
  }

  return (
    <div className="mt-8 p-6 bg-indigo-600 rounded-lg text-white text-center shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
      <p className="text-lg font-medium text-indigo-200">Total Area</p>
      <p className="text-4xl font-bold tracking-tight">
        {area.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        <span className="text-2xl font-normal text-indigo-200 ml-2">sq ft</span>
      </p>
    </div>
  );
};

export default ResultDisplay;
