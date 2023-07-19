// Input.tsx
import React, { ChangeEvent } from 'react';

interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error: string | undefined;
}

const InputField: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  const className = `outline outline-1 rounded mt-8 mx-8 h-12 w-72 ${
    error ? 'outline-red-500 mt-1' : ''
  }`;

  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        style={{ paddingLeft: '8px' }}
      />
      {error && (
        <div className="text-red-500 my-0 text-sm mx-8 w-72">{error}</div>
      )}
    </div>
  );
};

export default InputField;
