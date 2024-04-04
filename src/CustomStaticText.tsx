// CustomStaticText.tsx
import React from 'react';
import { FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps } from '@rjsf/utils';

/*
interface CustomStaticTextProps extends WidgetProps<any> {
  // id: string;
  schema: {
    default: string;
  };
}
*/

// const CustomStaticText: React.FC<CustomStaticTextProps> = ({ id, schema }) => {
const CustomStaticText: React.FC<WidgetProps> = (props) => {
  const { id, schema } = props;
  // Ensure schema.default is a string
  if (typeof schema.default !== 'string') {
    throw new Error('schema.default must be a string');
  }

  return (
    <div id={id} dangerouslySetInnerHTML={{ __html: schema.default }} />
  );
};

export default CustomStaticText;
