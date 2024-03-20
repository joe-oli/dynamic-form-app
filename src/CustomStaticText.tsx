// CustomStaticText.tsx
import React from 'react';
import { FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps } from '@rjsf/utils';

interface CustomStaticTextProps extends WidgetProps<any> {
  // id: string;
  schema: {
    default: string;
  };
}

const CustomStaticText: React.FC<CustomStaticTextProps> = ({ id, schema }) => {
  return (
    <div id={id} dangerouslySetInnerHTML={{ __html: schema.default }} />
  );
};

export default CustomStaticText;
