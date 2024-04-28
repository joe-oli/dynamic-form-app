// Dropdown single selection
/*
(1) the reason we defined 
interface CustomDropdownSingleData {
    value?: string | null; // can be a string, undefined, or null.
    notes?: string | null;
is because we want shape of data to submit to contain a 'null' prop, if not set; (i.e. don't omit or set to undefined)

(2) onChange event ensures instruction_link is omitted; else it could be simpler to include all 3 values:
    in Value: onChange={(event) => onChange({ ...formData, value: event.target.value })}
    in Notes: onChange={(event) => onChange({ ...formData, notes: event.target.value })}

(2b) ON SECOND THOUGHTS:
 No need to remove instruction_link at individual field level !!;
    even if we do, as per this example, it will still be part of formData at the parent level!!
What we need to do is remove instruction_link on the handlers for Save and Validate+Save, by creating a new object !

*/

/* NOT REQUIRED, this is not relevant at the Field-level; it was used for Form-level
interface ErrorObject {
    name: string;
    property: string;
    message: string;
    params: {
        missingProperty: string;
    };
    stack: string;
    schemaPath: string;
}
*/

import React, { useState } from 'react';
import { FieldProps } from '@rjsf/utils';

interface CustomDropdownSingleData {
    value?: string | null; // can be a string, undefined, or null.
    notes?: string;
    instruction_link?: string;
}


const CustomDropdownSingle: React.FC<FieldProps<CustomDropdownSingleData>> = (props) => {
    const [showNotes, setShowNotes] = useState(false);

    const handleNotesClick = () => {
        setShowNotes(!showNotes);
    }

    const formData = props.formData || {};
    const { onChange } = props;             //onChange callback for parent form
    const { errorSchema, required } = props;  //err handling
    //const rawErrorsArr: ErrorObject[] = (rawErrors as any) as ErrorObject[];
    // console.error('errorSchema:', errorSchema)

    const valueSchema = props.schema.properties?.value as { type: string; enum?: string[] } | undefined;
   // Extract any errors for the 'value' property
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
                        value={formData.value || ''}
                        // onChange={(event) => onChange({ ...formData, value: event.target.value })}
                        onChange={(event) => onChange({ value: event.target.value || '', notes: formData.notes })}
                    >
                        <option value="">--Please select--</option>
                        {valueSchema?.enum?.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    {valueErrors?.map((error, i) => (
                        <div key={i} className="error-message">
                            {error} 
                            {/* {`value: ${error}`} */}
                        </div>
                    ))}       
                </div>


                {/* check for truthy */}
                <div className="col-md-3">
                    {formData.instruction_link && (
                        <a className="question-instruction" href={formData.instruction_link || '#'} target="_blank" rel="noopener noreferrer">Instruction</a>
                    )}
                </div>


                {/* check for truthy */}
                <div className="col-md-auto">
                    { notesInSchema && (
                    <>    
                        <button type="button" className="question-note" onClick={handleNotesClick}>Note</button>
                        {showNotes && (
                            <textarea
                                value={formData.notes || ''}
                                onChange={(event) => onChange({ ...formData, notes: event.target.value })}
                                // onChange={(event) => onChange({ value: formData.value || '', notes: event.target.value || '' })}
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

export default CustomDropdownSingle;
