// Dropdown single selection
import React, { useState } from 'react';
import { FieldProps } from '@rjsf/utils';

interface CustomDropdownSingleData {
    value?: string;
    notes?: string;
    instruction_link?: string;
}

const CustomDropdownSingle: React.FC<FieldProps<CustomDropdownSingleData>> = (props) => {
    const [showNotes, setShowNotes] = useState(false);

    const handleNotesClick = () => {
        setShowNotes(!showNotes);
    }

    const formData = props.formData || {};
    const { onChange } = props;

    const valueSchema = props.schema.properties?.value as { type: string; enum?: string[] } | undefined;

    return (
        <div className="form-item">
            <label className="form-label" dangerouslySetInnerHTML={{ __html: props.schema.title || '' }} />

            <div className="row mt-2">
                <div className="col-md-5">
                    <select
                        value={formData.value || ''}
                        onChange={(event) => onChange({ ...formData, value: event.target.value })}
                    >
                        <option value="">--Please select--</option>
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

export default CustomDropdownSingle;
