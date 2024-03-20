// SchemaEditor.tsx
// import React, { useState } from 'react';
import React, { useState, ChangeEvent, MouseEvent } from 'react';

import './SchemaEditor.css';

interface SchemaEditorProps {
  schema: any; // Replace 'any' with the actual type of your schema
  uiSchema: any; // Replace 'any' with the actual type of your uiSchema
  setSchema: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the actual type of your schema
  setUiSchema: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the actual type of your uiSchema
}

const SchemaEditor: React.FC<SchemaEditorProps> = ({ schema, uiSchema, setSchema, setUiSchema }) => {
  const [tempSchema, setTempSchema] = useState(JSON.stringify(schema, null, 2));
  const [tempUiSchema, setTempUiSchema] = useState(JSON.stringify(uiSchema, null, 2));

  const handleSchemaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTempSchema(event.target.value);
  };

  const handleUiSchemaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTempUiSchema(event.target.value);
  };


  const updateSchema = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const newSchema = JSON.parse(tempSchema);
      setSchema(newSchema);
      alert('Success!')
    } catch (error) {
      const errMsg = 'Invalid JSON for schema';
      console.error(errMsg, error);
      alert(errMsg)
    }
  };

  const updateUiSchema = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const newUiSchema = JSON.parse(tempUiSchema);
      setUiSchema(newUiSchema);
      alert('Success!')
    } catch (error) {
      const errMsg = 'Invalid JSON for uiSchema';
      console.error(errMsg, error);
      alert(errMsg)
    }
  };

  return (
    <div className="schema-editor">
      <h1>Schema Editor</h1>

      <div className="schema-section">
        <h4>Schema</h4>
        <button onClick={updateSchema}>Update Schema</button>
        <textarea value={tempSchema} onChange={handleSchemaChange} spellCheck="false" />
      </div>

      <div className="ui-schema-section">
        <h4>UI Schema</h4>
        <button onClick={updateUiSchema}>Update UI Schema</button>
        <textarea value={tempUiSchema} onChange={handleUiSchemaChange} spellCheck="false" />
      </div>
    </div>
  );
};

export default SchemaEditor;


