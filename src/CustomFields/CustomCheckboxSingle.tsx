import React, { useState } from 'react';
import { FieldProps } from '@rjsf/utils';

interface CustomCheckboxSingleData {
    value?: boolean;
    notes?: string;
    instruction_link?: string;
}

const CustomCheckboxSingle: React.FC<FieldProps<CustomCheckboxSingleData>> = (props) => {
    const [showNotes, setShowNotes] = useState(false);

    const handleNotesClick = () => {
        setShowNotes(!showNotes);
    }

    const formData = props.formData || {};
    const { onChange } = props;

    return (
        <div className="form-item">
            <label className="form-label" dangerouslySetInnerHTML={{ __html: props.schema.title || '' }} />

            <div className="row mt-2">
                <div className="col-md-5">
                    <input
                        type="checkbox"
                        id={`${props.idSchema.$id}_checkbox`}
                        checked={formData.value || false}
                        onChange={(event) => onChange({ ...formData, value: event.target.checked })}
                        style={{ marginRight: '10px' }}
                    />
                    <label htmlFor={`${props.idSchema.$id}_checkbox`}>Check if applicable</label>
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

export default CustomCheckboxSingle;
