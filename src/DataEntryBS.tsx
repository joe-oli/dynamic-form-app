import React, { FormEvent, useState, useRef } from 'react';
import Form, { IChangeEvent, FormProps } from '@rjsf/core';

/* this part a HOC to override the ErrorList internal implmentation */
import { withTheme } from '@rjsf/core';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';


//my custom error list implementation
//import { ErrorObject, CustomDisplayFormlevelErrors } from './components/CustomDisplayErrors';
import { CustomDisplayFormlevelErrors } from './components/CustomDisplayErrors';

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

//hardcode example
import {initialData as initData} from './myDataInit'

//for overriding the ErrorList impplemenation;
//************************************************************* */
/* DOESNT WORK; may have worked with v4.x; 
for v5.x use ErrorListProps and templates;
const CustomTheme = {
    ...Bootstrap4Theme,
    ErrorList: CustomDisplayFormlevelErrors,
};
*/

const FormWithCustomErrorList = withTheme(Bootstrap4Theme); // CustomTheme
//************************************************************* */

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

// instead of 
// const [formData, setFormData] = useState<any>({});
interface FieldData {
    value?: string | number | null;
    notes?: string | null;
    instruction_link?: string;
}
type FormData = Record<string, FieldData>;


interface DataEntryBSProps {
    schema: any; // Replace 'any' with the actual type of your schema
    uiSchema: any; // Replace 'any' with the actual type of your uiSchema
}


const DataEntryBS: React.FC<DataEntryBSProps> = ({ schema, uiSchema }) => {


    //manually maintain form Data, so it can be manually saved (without validation)
    // const [formData, setFormData] = useState<any>({});
    const [formData, setFormData] = useState<FormData>( {});

    // Create a ref for the form (manual submission)
    const formRef = useRef<Form<any>>(null);


    const customValidator = (formData: any, errors: any, uiSchema: any) => {

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

    // const changeHandler = ({ formData }) => setFormData(formData);
    const changeHandler = (e: IChangeEvent<any>) => setFormData(e.formData);
    /* Any time an individual field changes within <Form />, the internal onChange of the field is triggered;
    the callback <Form onChange={changeHandler} /> is also trigered to maintain state (formData) at this parent level
    */

    //This is where we massage the dataToSubmit to server, for saving
    const saveHandler = () => {
        //i.e. no need to remove instruction_link at individual field level !!;
        //even if you do, it still won't be removed here, as it's still remain part of the formData !!
        //i.e. we need to remove it at the parent level !!

        // Create a new object that excludes 'instruction_link' from each field
        // and also excludes fields that use the 'CustomStaticText' widget
        const dataToSubmit = Object.fromEntries(
            Object.entries(formData).map(([key, value]) => {
                // Exclude fields that use the 'CustomStaticText' widget
                if (uiSchema[key] && uiSchema[key]['ui:widget'] === 'CustomStaticText') {
                    return [key, undefined];
                }
                const { instruction_link, ...rest } = value;
                return [key, rest];
            })
        );

        console.log("Saving formData:", formData);
        alert("TODO: Ajax call to SAVE...\n\n" + JSON.stringify(dataToSubmit));
    };


    /* NOT USED.
    const submitHandler = (form: any, e: React.FormEvent<HTMLFormElement>) => {
        // insert any last minute custom validations here... (in ADDITION to default validation, which has passed by the time you get here)
        const { formData } = form; //destructure.
        if (formData.age && formData.age < 18) {
            console.error("Age must be 18 or older");
            e.preventDefault(); // Prevent form submission if needed
            return;
        }

        // submit, etc
        alert("TODO: Ajax call to Submit...\n\n" + JSON.stringify(formData));
    };
    */


    /* This will fire AFTER VALIDATION has passed; i.e. onSubmit event for <Form onSubmit={submitHandler};
    what triggers the actual <form /> submit and auto-validation is done manually by 'validateAndSaveHandler' in our case;
    */
    const submitHandler = (data: IChangeEvent<any>, e: FormEvent<HTMLFormElement>) => {
        // The form is valid (VALIDATION passed), so submit data to server;
        
        // insert any last minute custom validations here... (in ADDITION to default validation, which has passed by the time you get here)

        alert("TODO: Ajax call to SUBMIT...\n\n" + JSON.stringify(data.formData));
    };


    /* Manual trigger form submission, bypass the auto-gen Submit button of <Form />, which is hidden by CSS;
    Typically by default a Submit button is generated, which triggers form validation ALSO; 
    but here we modified it, as we want the button placement to appear OUTSIDE the form fieldset;
    */
    const validateAndSaveHandler = () => {
        formRef.current?.submit(); //this is the equivalent to clicking the default generated Submit button within a form;
    };

    function logErrors(errors: any) {
        console.warn('errorsArray:', errors);
    }

    /* Customised Form, with manual 1) Save, 2) Validate+Save buttons */
    return (
        <div id="containerChecklist" className="container-fluid crm-styles">
            {/* was className='row vh-100', removed vh-100 from below line */}
            <div className="row" style={{ overflow: 'auto' }}>
                <div className="col-md-9 pl-5">



                    {/* This would almost have worked, except the errors Array is not string[] any more,
                    , due to the shape of my schema, which is nested to take `value`, `instruction_link`, `notes`;
                    So I have to override the internal implementaiton of ErrorList with a HOC;

                        <Form schema={schema} uiSchema={uiSchema} 
                            widgets={WIDGET_MAP} fields={FIELD_MAP}
                            validator={AjvValidator} customValidate={customValidator} noHtml5Validate
                            onChange={changeHandler} onSubmit={handleSubmit2}
                            onError={logErrors}
                            ref={formRef}
                            className="form-with-hidden-submit"
                        /> 

                        <FormWithCustomErrorList .../> HOC version, which didn't work as intended to override ErrorList;
                        seems that would have applied to v4.x, not version 5.x, so I went back to plain Form;
                    */}
                    {/* Back to plain Form, no HOC */}
                    <Form schema={schema} uiSchema={uiSchema} 
                        widgets={WIDGET_MAP} fields={FIELD_MAP}
                        formData={formData}
                        validator={AjvValidator} customValidate={customValidator} noHtml5Validate
			            onChange={changeHandler} onSubmit={submitHandler} 
			            onError={logErrors} templates={ {ErrorListTemplate: CustomDisplayFormlevelErrors}}
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
                                <button onClick={saveHandler}>Save</button>
                            </li>

                            <li>
                                {/* <a href="#">
                                    <span className="media-body ml-1">Validate &amp; Save</span>
                                </a> */}
                                <button onClick={validateAndSaveHandler}>Validate &amp; Save</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataEntryBS;
