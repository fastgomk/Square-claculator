
import React from 'react';
import { Unit } from '../types';

interface InputWithUnitProps {
  label: string;
  value: string;
  unit: Unit;
  onValueChange: (value: string) => void;
  onUnitChange: (unit: Unit) => void;
  error?: string | null;
}

const InputWithUnit: React.FC<InputWithUnitProps> = ({
  label,
  value,
  unit,
  onValueChange,
  onUnitChange,
  error,
}) => {
  const unitOptions = Object.values(Unit).map((u) => (
    <option key={u} value={u}>
      {u.charAt(0).toUpperCase() + u.slice(1)}
    </option>
  ));

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label.toLowerCase()} className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <div className="flex rounded-lg shadow-sm">
        <input
          type="number"
          id={label.toLowerCase()}
          name={label.toLowerCase()}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder="0.0"
          className={`w-full px-4 py-3 rounded-l-lg border-t border-b border-l text-slate-800 dark:text-white bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${error ? 'border-red-500 ring-red-500' : 'border-slate-300 dark:border-slate-600'}`}
        />
        <select
          value={unit}
          onChange={(e) => onUnitChange(e.target.value as Unit)}
          className="px-4 py-3 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 border-t border-b border-r"
        >
          {unitOptions}
        </select>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputWithUnit;
