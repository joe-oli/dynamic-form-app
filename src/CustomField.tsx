import React, { FC, InputHTMLAttributes } from 'react';

interface CustomFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  rawErrors?: string[];
}

const CustomField: FC<CustomFieldProps> = ({ label, rawErrors, ...inputProps }) => {
  return (
    <div>
      <label dangerouslySetInnerHTML={{ __html: label }} />
      <input {...inputProps} />
      {rawErrors?.map((error, i) => (
        <span key={i}>{error}</span>
      ))}
    </div>
  );
};

export default CustomField;