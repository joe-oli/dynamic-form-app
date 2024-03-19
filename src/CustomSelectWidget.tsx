import React, { FC, InputHTMLAttributes } from 'react';

interface CustomSelectProps {
  label: string;
  rawErrors?: string[];
  //above is similar to CustomField, but additional due to this being a dropdown
  options: { enumOptions: { label: string; value: string }[] };
  value: any;
  onChange: (value: any) => void;
}

const CustomSelectWidget: FC<CustomSelectProps> = ({ label, rawErrors, options, value, onChange }) => {
  return (
    <div>
      <label dangerouslySetInnerHTML={{ __html: label }} />
      
      {/* <input {...inputProps} /> NOT AN INPUT, but a Dropdown */}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.enumOptions.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {rawErrors?.map((error, i) => (
        <span key={i}>{error}</span>
      ))}
    </div>
  );
};

export default CustomSelectWidget;