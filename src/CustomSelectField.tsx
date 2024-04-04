import { FC } from 'react';
import { FieldProps } from '@rjsf/utils'; //FormContextType, RJSFSchema, StrictRJSFSchema

/*
interface CustomSelectFieldProps extends FieldProps<any> {
    // id: any; - removed, already in base class
    rawErrors?: string[];
    schema: {
      enum: string[];
      title: string;
    };
    // onChange: (value: any) => void;
  }
  */
  
// const CustomSelectField: FC<CustomSelectFieldProps> = (props) => {
const CustomSelectField: FC<FieldProps> = (props) => {
    const { id, rawErrors, onChange, schema } = props;
  //   const rawErrors = props.rawErrors;
  //   const onChange = props.onChange;
  //   const schema = props.schema;
  //   const id = props.id;

    // Ensure schema.enum is an array of strings and schema.title is a string
    if (!Array.isArray(schema.enum) || typeof schema.title !== 'string') {
      throw new Error('schema.enum must be an array of strings and schema.title must be a string');
    }

    const enumOptions = schema.enum;
    const title = schema.title;
  
    return (
      <div>
        <label htmlFor={id} dangerouslySetInnerHTML={{ __html: title }} />
        <select id={id} onChange={(e) => onChange(e.target.value)}>
          {enumOptions.map((option, i) => (
          typeof option === 'string' || typeof option === 'number' ? (
            <option key={i} value={option}>
              {option}
            </option>
          ) : null
          ))}
        </select>
        {rawErrors?.map((error, i) => (
          <span key={i}>{error}</span>
        ))}
      </div>
    );
  };
  

export default CustomSelectField;


/*
NOTES:
The error is because `option` in `enumOptions.map((option, i) => ...)` can be of type `JSONSchema7Type`, which includes `null`, `boolean`, `object`, `array`, etc. 
However, the `value` attribute of an `<option>` element in React must be a `string`, `number`, or `readonly string[]`.

To fix this, you need to ensure that `option` is a `string` or `number` before assigning it to the `value` attribute. 
If `option` is not a `string` or `number`, you should handle it appropriately (e.g., convert it to a string, or skip this option).

In this above code, each `option` is checked to ensure it's a `string` or `number` before rendering the `<option>` element.
 If `option` is not a `string` or `number`, it's skipped (`null` is returned from the `map` callback).
*/