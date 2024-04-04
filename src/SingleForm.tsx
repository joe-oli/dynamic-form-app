import React, { FormEvent, useState, useRef } from 'react';
// import Form from '@rjsf/core'
import Form, { IChangeEvent, FormProps } from '@rjsf/core';


//import { schema, uiSchema } from './mySchema2'; //it will actually import mySchema.js (NOT .ts)
//above line moved up to parent App.tsx;

import CustomSelectField from './CustomSelectField';
import CustomStaticText from './CustomStaticText';

import AjvValidator from '@rjsf/validator-ajv8';

/*
import {RJSFSchema} from '@rjsf/utils'
import { withTheme } from '@rjsf/core';
import {Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4'
import { JSONSchema7 } from 'json-schema';
*/
import './SingleForm.css'

/* NB: v5 uses 
  import UiSchema from '@rjsf/core'
  vs
  import { UiSchema } from 'react-jsonschema-form'; 
*/

// Define your custom widgets and/or custom fields.
const WIDGET_MAP = {
  CustomStaticText: CustomStaticText,
  // Add more components as needed
};
const FIELD_MAP = {
  CustomSelectField: CustomSelectField,
  // Add more components as needed
};

/* NB: this is equivalent to the above !
const FIELD_MAP = {
  CustomSelectField,
  // Add more components as needed
};
*/

interface SingleFormProps {
  schema: any; // Replace 'any' with the actual type of your schema
  uiSchema: any; // Replace 'any' with the actual type of your uiSchema
}


const SingleForm: React.FC<SingleFormProps> = ({ schema, uiSchema }) => {

  /*
    const mockValidator = () => {}; // Empty function
    
    const mockValidator: ValidatorType = (formData: any, schema: JSONSchema7, options: any) => {
      return { valid: true };
    };
  */

  //manually maintain form Data, so it can be manually saved (without validation)
  const [formData, setFormData] = useState<any>({});

  // Create a ref for the form (manual submission)
  const formRef = useRef<Form<any>>(null);


  const customValidator = (formData: any, errors: any, uiSchema: any) => {

    console.log('formData:', formData)
    console.log('errors:', errors)
    console.log('uiSchema:', uiSchema)
    //return {}

    //My additional custom validation logic...
    // For example, if you want to add a custom error when the 'firstName' field is 'Joe'
    if (formData.firstName === 'Joe') {
      errors.firstName.addError('Joe is not an allowed name');
    }

    if (formData.dob) {
      const dob = new Date(formData.dob);
      const minDate = new Date("2020-01-01");
      const currentDate = new Date();

      if (dob < minDate) {
        errors.dob.addError("Date of birth cannot be before 2020-01-01");
      }

      if (dob > currentDate) {
        errors.dob.addError("Date of birth cannot be in the future");
      }
    }

    return errors;
  }

  /* the syntax {formData} is for destructuring; else don't destructure and use:
  const formData = form.formData; 
  or
  const { formData } = form;
  */

  // const handleChange = ({ formData }) => setFormData(formData);
  const handleChange = (e: IChangeEvent<any>) => setFormData(e.formData);

  const handleSave = () => {
    // Save the form data
    console.log("Saving form data:", formData);
  };


  const handleSubmit = (form: any, e: React.FormEvent<HTMLFormElement>) => {
    // Any last minute custom validation...
    const { formData } = form; //destructure.
    if (formData.age && formData.age < 18) {
      console.error("Age must be 18 or older");
      e.preventDefault(); // Prevent form submission if needed
      return;
    }

    // submit, etc
    alert("TODO: Ajax call to Submit...\n\n" + JSON.stringify(formData));
  };


  const handleSubmit2 = (data: IChangeEvent<any>, e: FormEvent<HTMLFormElement>) => {
    // The form is valid, so you can save the data
    console.log("Validating and saving form data:", data.formData);
  };



  const handleValidateAndSave = () => {
    // Trigger form submission
    formRef.current?.submit();
  };

  return (
    <div>
      {/* Your Single Form component content */}
      <h1>Single Form Page</h1>


      {/* Customised Form, with manual 1) Save, 2) Validate+Save buttons */}
      <Form schema={schema} uiSchema={uiSchema}
        widgets={WIDGET_MAP} fields={FIELD_MAP}
        validator={AjvValidator} customValidate={customValidator} noHtml5Validate
        onChange={handleChange} onSubmit={handleSubmit2}
        ref={formRef}
        className="form-with-hidden-submit"
      />

      <button onClick={handleSave}>Save</button>
      <button onClick={handleValidateAndSave}>Validate + Save</button>
    </div>
  );
};

export default SingleForm;