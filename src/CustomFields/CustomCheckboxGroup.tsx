import React, { useState } from 'react';
import { FieldProps } from '@rjsf/utils';

interface CustomCheckboxGroupData {
    value?: string[];
    notes?: string;
    instruction_link?: string;
}

const CustomCheckboxGroup: React.FC<FieldProps<CustomCheckboxGroupData>> = (props) => {
    const [showNotes, setShowNotes] = useState(false);

    const handleNotesClick = () => {
        setShowNotes(!showNotes);
    }

    const formData = props.formData || {};
    const { onChange } = props;
    const { errorSchema, required } = props;  //err handling
    // console.error('errorSchema:', errorSchema)
    // console.warn('required:', required)

    //const valueSchema = props.schema.properties?.value.items as { type: string; enum?: string[] } | undefined;
    //see DropdownMulti, same issue.
    const valueSchema = (props.schema.properties?.value as any)?.items as { type: string; enum?: string[] } | undefined;
    /*
      valueSchema = {
            "type": "string",
            "enum": [
                "apples",
                "oranges",
                "bananas"
            ]
        }
    */

    // Extract any errors for the 'value' property
    const valueErrors = errorSchema && errorSchema.value && errorSchema.value.__errors;
    // Check if 'notes' is in the schema
    const notesInSchema = props.schema.properties && 'notes' in props.schema.properties;
   
    // console.warn('valueSchema:',valueSchema);
    // console.error('valueErrors:', valueErrors)

    return (
        <div className="form-item">
            {/* <label className="form-label" dangerouslySetInnerHTML={{ __html: props.schema.title || '' }} /> */}
            <label className="form-label">
                <span dangerouslySetInnerHTML={{ __html: props.schema.title || '' }} />
                {required && <span> *</span>}
            </label>

            <div className="row mt-2">
                <div className="col-md-5">
                    {valueSchema?.enum?.map((option, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                id={`${props.idSchema.$id}_${index}`}
                                checked={formData.value?.includes(option) || false}
                                onChange={(event) => {
                                    const newValue = [...(formData.value || [])];
                                    if (event.target.checked) {
                                        newValue.push(option);
                                    } else {
                                        newValue.splice(newValue.indexOf(option), 1);
                                    }
                                    onChange({ ...formData, value: newValue });
                                }}
                                style={{ marginRight: '5px' }}
                            />
                            <label htmlFor={`${props.idSchema.$id}_${index}`}>{option}</label>
                        </div>
                    ))}

                    {valueErrors?.map((error, i) => (
                        <div key={i} className="error-message">
                            {error} 
                        </div>
                    ))}                         
                </div>

                <div className="col-md-3">
                    {formData.instruction_link && (
                        <a className="question-instruction" href={formData.instruction_link || '#'} target="_blank" rel="noopener noreferrer">Instruction</a>
                    )}
                </div>

                <div className="col-md-auto">
                    {notesInSchema && (
                    <>    
                        <button type="button" className="question-note" onClick={handleNotesClick}>Note</button>
                    
                        {showNotes && (
                        <textarea
                            value={formData.notes || ''}
                            onChange={(event) => onChange({ ...formData, notes: event.target.value })}
                            maxLength={3600}
                        />
                        )}
                    </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CustomCheckboxGroup;
