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
    const { onChange } = props;

    // const valueSchema = props.schema.properties?.value.items as { type: string; enum?: string[] } | undefined;
    /*
    The error is occurring because the TypeScript compiler is not able to guarantee that props.schema.properties?.value is of type object. 
    In JSON Schema, a property can be of multiple types, and one of those types is false, which would not have an items property.
    */
    const valueSchema = (props.schema.properties?.value as any)?.items as { type: string; enum?: string[] } | undefined;

    return (
        <div className="form-item">
            <label className="form-label" dangerouslySetInnerHTML={{ __html: props.schema.title || '' }} />

            <div className="row mt-2">
                <div className="col-md-5">
                    <select
                        multiple
                        value={formData.value || []}
                        onChange={(event) => onChange({ ...formData, value: Array.from(event.target.selectedOptions, option => option.value) })}
                    >
                        {valueSchema?.enum?.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-3">
                    <a className="question-instruction" href={formData.instruction_link || '#'} target="_blank" rel="noopener noreferrer">Instruction</a>
                </div>

                <div className="col-md-auto">
                    <button type="button" className="question-note" onClick={handleNotesClick}>Note</button>
                    {showNotes && (
                        <textarea
                            value={formData.notes || ''}
                            onChange={(event) => onChange({ ...formData, notes: event.target.value })}
                            maxLength={3600}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CustomDropdownMulti;
