import React, { useState } from 'react';
import { FieldProps } from '@rjsf/utils';

interface CustomRadioFieldData {
    value?: string;
    notes?: string;
    instruction_link?: string;
}

const CustomRadioField: React.FC<FieldProps<CustomRadioFieldData>> = (props) => {
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
                <div className="col-md-5" style={{ display: 'flex', alignItems: 'center' }}>
                    {/* style above makes RB horizontal */}
                    {valueSchema?.enum?.map((option, index) => (

                        <div key={index} style={{marginRight: '10px'}}>
                            <input
                                type="radio"
                                id={`${props.idSchema.$id}_${index}`}
                                checked={formData.value === option}
                                onChange={() => onChange({ ...formData, value: option })}
                                style={{ marginRight: '5px' }}
                            />
                            {/* style on input makes a gap between circle and label */}
                            <label htmlFor={`${props.idSchema.$id}_${index}`}>{option}</label>
                        </div>

                    ))}
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

export default CustomRadioField;
