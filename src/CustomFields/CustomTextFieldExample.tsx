import React from 'react';
import { FieldProps } from '@rjsf/utils';

const CustomTextFieldExample: React.FC<FieldProps> = (props) => {
  const { id, schema, formData, onChange } = props;

  const handleNotesButtonClick = () => {
    // Open the notes modal
  };

  return (
    <div>
      <label htmlFor={id} dangerouslySetInnerHTML={{ __html: schema.title || '' }} />
      <a href={schema.instruction_link} target="_blank" rel="noopener noreferrer">Instruction Link</a>
      <input id={id} type="text" value={formData.value || ''} onChange={(e) => onChange({ ...formData, value: e.target.value })} />
      <button type="button" onClick={handleNotesButtonClick}>Notes</button>
      <textarea value={formData.notes || ''} onChange={(e) => onChange({ ...formData, notes: e.target.value })} />
    </div>
  );
};

export default CustomTextFieldExample;