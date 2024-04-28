import React, { useState } from 'react';
import { FieldProps } from '@rjsf/utils';

interface CustomDropdownMultiData {
    value?: string[];
    notes?: string;
    instruction_link?: string;
}

const CustomDropdownMulti: React.FC<FieldProps<CustomDropdownMultiData>> = (props) => {
    const [showNotes, setShowNotes] = useState(false);

    const handleNotesClick = () => {
        setShowNotes(!showNotes);
    }

    const formData = props.formData || {};
    const { onChange, errorSchema, required } = props;

    // const valueSchema = props.schema.properties?.value.items as { type: string; enum?: string[] } | undefined;
    /*
    The error is occurring because the TypeScript compiler is not able to guarantee that props.schema.properties?.value is of type object. 
    In JSON Schema, a property can be of multiple types, and one of those types is false, which would not have an items property.
    */
    const valueSchema = (props.schema.properties?.value as any)?.items as { type: string; enum?: string[] } | undefined;
    const valueErrors = errorSchema && errorSchema.value && errorSchema.value.__errors;
    // Check if 'notes' is in the schema
    const notesInSchema = props.schema.properties && 'notes' in props.schema.properties;

    return (
        <div className="form-item">
            {/* <label className="form-label" dangerouslySetInnerHTML={{ __html: props.schema.title || '' }} /> */}
            <label className="form-label">
                <span dangerouslySetInnerHTML={{ __html: props.schema.title || '' }} />
                {required && <span> *</span>}
            </label>

            <div className="row mt-2">
                <div className="col-md-5">
                    <select
                        multiple size={5}
                        value={formData.value || []}
                        onChange={(event) => onChange({ ...formData, value: Array.from(event.target.selectedOptions, option => option.value) })}
                        style={{ width: '80%', overflowY: 'auto' }} // Adjust the width as needed
                    >
                        {valueSchema?.enum?.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    {valueErrors?.map((error, i) => (
                        <div key={i} className="error-message">
                            {error} 
                        </div>
                    ))}
                </div>

                <div className="col-md-3">
                    <a className="question-instruction" href={formData.instruction_link || '#'} target="_blank" rel="noopener noreferrer">Instruction</a>
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

export default CustomDropdownMulti;
