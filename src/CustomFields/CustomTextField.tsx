import React, { useState } from 'react';
import { FieldProps } from '@rjsf/utils';

interface AssessedTierFormData {
    value?: string;
    notes?: string;
    instruction_link?: string;
}

const AssessedTierField: React.FC<FieldProps<AssessedTierFormData>> = (props) => {
    const [showNotes, setShowNotes] = useState(false);

    const handleNotesClick = () => {
        setShowNotes(!showNotes);
    }

    //   const { formData, onChange } = props;  //formData could be undefined, Typescript complains!
    const formData = props.formData || {};
    const { onChange } = props;

    const valueSchema = props.schema.properties?.value as { type: string; pattern?: string; minLength?: number; maxLength?: number } | undefined;

    return (
        <div className="form-item">
            <label className="form-label" dangerouslySetInnerHTML={{ __html: props.schema.title || '' }} />

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

export default AssessedTierField;

