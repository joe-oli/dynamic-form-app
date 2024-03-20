import { FC } from 'react';
import { FieldProps } from '@rjsf/utils'; //FormContextType, RJSFSchema, StrictRJSFSchema

interface CustomSelectFieldProps extends FieldProps<any> {
    // id: any; - removed, already in base class
    rawErrors?: string[];
    schema: {
      enum: string[];
      title: string;
    };
    // onChange: (value: any) => void;
  }
  
  const CustomSelectField: FC<CustomSelectFieldProps> = (props) => {
    const { id, rawErrors, onChange, schema } = props;
  //   const rawErrors = props.rawErrors;
  //   const onChange = props.onChange;
  //   const schema = props.schema;
  //   const id = props.id;

    const enumOptions = schema.enum;
    const title = schema.title;
  
    return (
      <div>
        <label htmlFor={id} dangerouslySetInnerHTML={{ __html: title }} />
        <select id={id} onChange={(e) => onChange(e.target.value)}>
          {enumOptions.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        {rawErrors?.map((error, i) => (
          <span key={i}>{error}</span>
        ))}
      </div>
    );
  };
  

export default CustomSelectField;
