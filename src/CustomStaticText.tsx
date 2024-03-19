// CustomStaticText.tsx
import React from 'react';

interface CustomStaticTextProps {
  id: string;
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
