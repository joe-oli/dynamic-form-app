import React, { useState } from 'react';
import { FieldProps } from '@rjsf/utils';

interface CustomTextFieldData {
    value?: string;
    notes?: string;
    instruction_link?: string;
}

const CustomTextField: React.FC<FieldProps<CustomTextFieldData>> = (props) => {
    const [showNotes, setShowNotes] = useState(false);

    const handleNotesClick = () => {
        setShowNotes(!showNotes);
    }

    //   const { formData, onChange } = props;  //formData could be undefined, Typescript complains!
    const formData = props.formData || {};
    const { onChange } = props;
    const { errorSchema, required } = props;  //err handling

    const valueSchema = props.schema.properties?.value as { type: string; pattern?: string; minLength?: number; maxLength?: number } | undefined;
    const valueErrors = errorSchema && errorSchema.value && errorSchema.value.__errors;
    const notesInSchema = props.schema.properties && 'notes' in props.schema.properties; 

    return (
        <div className="form-item">
            {/* <label className="form-label" dangerouslySetInnerHTML={{ __html: props.schema.title || '' }} /> */}
            <label className="form-label">
                <span dangerouslySetInnerHTML={{ __html: props.schema.title || '' }} />
                {required && <span> *</span>}
            </label>

            {/* primary input, instruction, note on its own line or row */}
            <div className="row mt-2">
                {/* 1st col */}
                <div className="col-md-5">
                    <input
                        type={valueSchema?.type || 'text'}
                        value={formData.value || ''}
                        onChange={(event) => onChange({ ...formData, value: event.target.value })}
                        pattern={valueSchema?.pattern}
                        minLength={valueSchema?.minLength}
                        maxLength={valueSchema?.maxLength}
                    />

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

export default CustomTextField;

