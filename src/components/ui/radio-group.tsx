"use client";

export interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  className?: string;
}

export function RadioGroup({ name, value, onChange, options, className = "" }: RadioGroupProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {options.map((option) => (
        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            checked={value === option.value}
            value={option.value}
            onChange={() => onChange(option.value)}
            className="h-4 w-4 text-blue-600"
          />
          <span className="text-sm text-gray-800 dark:text-gray-200">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
