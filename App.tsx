
import React, { useState, useCallback } from 'react';
import { Unit } from './types';
import Header from './components/Header';
import InputWithUnit from './components/InputWithUnit';
import ResultDisplay from './components/ResultDisplay';

const CONVERSION_FACTORS: Record<Unit, number> = {
  [Unit.Feet]: 1,
  [Unit.Inches]: 1 / 12,
  [Unit.Meters]: 3.28084,
  [Unit.Centimeters]: 0.0328084,
};

const convertToFeet = (value: number, unit: Unit): number => {
  return value * CONVERSION_FACTORS[unit];
};

const App: React.FC = () => {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [lengthUnit, setLengthUnit] = useState<Unit>(Unit.Feet);
  const [widthUnit, setWidthUnit] = useState<Unit>(Unit.Feet);
  const [area, setArea] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = useCallback(() => {
    const lengthNum = parseFloat(length);
    const widthNum = parseFloat(width);

    if (isNaN(lengthNum) || isNaN(widthNum) || lengthNum <= 0 || widthNum <= 0) {
      setError('Please enter valid, positive numbers for length and width.');
      setArea(null);
      return;
    }

    setError(null);

    const lengthInFeet = convertToFeet(lengthNum, lengthUnit);
    const widthInFeet = convertToFeet(widthNum, widthUnit);

    const calculatedArea = lengthInFeet * widthInFeet;
    setArea(calculatedArea);
  }, [length, width, lengthUnit, widthUnit]);

  const handleReset = () => {
    setLength('');
    setWidth('');
    setLengthUnit(Unit.Feet);
    setWidthUnit(Unit.Feet);
    setArea(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-100 dark:bg-slate-900 font-sans">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8">
          <Header />
          <div className="space-y-6">
            <InputWithUnit
              label="Length"
              value={length}
              unit={lengthUnit}
              onValueChange={setLength}
              onUnitChange={setLengthUnit}
              error={error && (isNaN(parseFloat(length)) || parseFloat(length) <= 0) ? 'Invalid length' : undefined}
            />
            <InputWithUnit
              label="Width"
              value={width}
              unit={widthUnit}
              onValueChange={setWidth}
              onUnitChange={setWidthUnit}
              error={error && (isNaN(parseFloat(width)) || parseFloat(width) <= 0) ? 'Invalid width' : undefined}
            />
          </div>

          {error && (
             <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
             <button
              onClick={handleReset}
              className="w-full px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg shadow-md hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all duration-200"
            >
              Reset
            </button>
            <button
              onClick={handleCalculate}
              className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
            >
              Calculate
            </button>
          </div>

          {area !== null && <ResultDisplay area={area} />}
        </div>
        <footer className="text-center mt-6 text-sm text-slate-500 dark:text-slate-400">
            <p>Designed with a clean, modern aesthetic.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
