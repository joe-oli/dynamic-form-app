// CustomWidget.tsx
import React from 'react';

interface CustomWidgetProps {
  id: string;
  label: string;
  value: any;
  onChange: (value: any) => void;
  options: { enumOptions: { label: string; value: string }[] };
}

const CustomWidget: React.FC<CustomWidgetProps> = ({ id, label, value, onChange, options }) => {
  return (
    <div>
      <label htmlFor={id} dangerouslySetInnerHTML={{ __html: label }} />
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.enumOptions.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomWidget;
