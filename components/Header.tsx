
import React from 'react';
import CalculatorIcon from './CalculatorIcon';

const Header: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3">
        <CalculatorIcon />
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
          Square Feet Calculator
        </h1>
      </div>
      <p className="text-slate-500 dark:text-slate-400 mt-2">
        Calculate area from any unit of measurement.
      </p>
    </div>
  );
};

export default Header;
