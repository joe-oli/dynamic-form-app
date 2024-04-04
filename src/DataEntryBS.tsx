import React, { FormEvent, useState, useRef } from 'react';
import Form, { IChangeEvent, FormProps } from '@rjsf/core';

import 'bootstrap/dist/css/bootstrap.min.css';
import './DataEntryBS.css';

import CustomSelectField from './CustomSelectField';
import CustomStaticText from './CustomStaticText';

import CustomTextField from './CustomFields/CustomTextField';
import CustomNumberField from './CustomFields/CustomNumberField';
import CustomRadioField from './CustomFields/CustomRadioField';
import CustomCheckboxSingle from './CustomFields/CustomCheckboxSingle';
import CustomDropdownSingle from './CustomFields/CustomDropdownSingle';
import CustomDropdownMulti from './CustomFields/CustomDropdownMulti';
import CustomCheckboxGroup from './CustomFields/CustomCheckboxGroup';
import CustomTextMulti from './CustomFields/CustomTextMulti';
import CustomDatePicker from './CustomFields/CustomDatePicker';

import AjvValidator from '@rjsf/validator-ajv8';


// Define your custom widgets and/or custom fields.
const WIDGET_MAP = {
    CustomStaticText: CustomStaticText,

    // Add more components as needed
};
const FIELD_MAP = {
    CustomTextField: CustomTextField,
    CustomNumberField: CustomNumberField,
    CustomRadioField: CustomRadioField,
    CustomCheckboxSingle: CustomCheckboxSingle,
    CustomDropdownSingle: CustomDropdownSingle,
    CustomDropdownMulti: CustomDropdownMulti,
    CustomCheckboxGroup: CustomCheckboxGroup,
    CustomTextMulti: CustomTextMulti, 
    CustomDatePicker: CustomDatePicker,
    // Add more components as needed
    CustomSelectField: CustomSelectField,
};

interface DataEntryBSProps {
    schema: any; // Replace 'any' with the actual type of your schema
    uiSchema: any; // Replace 'any' with the actual type of your uiSchema
}

const DataEntryBS: React.FC<DataEntryBSProps> = ({ schema, uiSchema }) => {


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
        <div id="containerChecklist" className="container-fluid crm-styles">
            {/* was className='row vh-100', removed vh-100 from below line */}
            <div className="row" style={{ overflow: 'auto' }}>
                <div className="col-md-9 pl-5">

                    {/* Customised Form, with manual 1) Save, 2) Validate+Save buttons 
                        uiSchema={uiSchema} 
                    */}
                    <Form schema={schema} uiSchema={uiSchema} 
                        widgets={WIDGET_MAP} fields={FIELD_MAP}
                        validator={AjvValidator} customValidate={customValidator} noHtml5Validate
                        onChange={handleChange} onSubmit={handleSubmit2}
                        ref={formRef}
                        className="form-with-hidden-submit"
                    />
                </div>

                <div className="col-md-3 pr-5">
                    <div className="aus-formnav" >
                        <ul className="aus-formnav-actions right-side-bar">

                            <li>
                                <a href="#">
                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                        {/* SVG path */}
                                    </svg>
                                    <span className="media-body ml-1">Documents</span>
                                </a>
                            </li>

                            <li>
                                {/* <a href="#">
                                    <span className="media-body ml-1">Save</span>
                                </a> */}
                                <button onClick={handleSave}>Save</button>
                            </li>

                            <li>
                                {/* <a href="#">
                                    <span className="media-body ml-1">Validate &amp; Save</span>
                                </a> */}
                                <button onClick={handleValidateAndSave}>Validate &amp; Save</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataEntryBS;
