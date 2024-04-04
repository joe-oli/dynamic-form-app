import React from 'react';
import { FieldProps } from '@rjsf/utils';

const TextBlockField: React.FC<FieldProps> = (props) => {
    const { schema } = props;

    const content = typeof schema.default === 'string' ? schema.default : '';
    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    );
}

export default TextBlockField;
