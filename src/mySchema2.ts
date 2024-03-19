// import  {JSONSchema7}  from 'json-schema';
import {RJSFSchema} from '@rjsf/utils'
import { UiSchema } from '@rjsf/utils'


import CustomField from './CustomField';
import CustomWidget from './CustomWidget';
import CustomSelectWidget from './CustomSelectWidget';
import CustomSelectField from './CustomSelectField';

import CustomStaticText from './CustomStaticText';

const schema: RJSFSchema = {
    title: "User Information", //fieldset-Legend
    type: "object",
    required: ["firstName", "lastName"], // These fields are mandatory
    properties: {
      firstName: {
        type: "string",
        title: "First Name",
        minLength: 2, //setting min,max (Length)
        maxLength:20,
        pattern: "^[A-Za-z'-]*$" // alpha, including apostrophes (O'Donell), and hyphens (Mary-Jane)
      },
      lastName: {
        type: "string",
        title: "Last Name",
        pattern: "^[A-Za-z'-]*$" // alpha, including apostrophes (O'Donell), and hyphens (Mary-Jane)
      },
      age: {
        type: "number",
        title: "Age",
        minimum:18, //setting min,max
        maximum:100
      },
      dob: {
        type: "string",
        format: "date",
        pattern: "^(19[0-9]{2}|200[0-9]|201[0-9]|202[0-4])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$" ,
        //RegEx - allows dates from 1900-01-01 to 2024-12-31; Not ideal, assumes all months have 31 days, use validate_fn; 
      },
      favouriteSport: {
        type: "string",
        enum: [
          "Basketball",
          "Football",
          "Tennis",
          "Other" // Add more options as needed
        ],
        title: "<span style='color: red; font-weight: bold;'>What Is Your preferred sport?</span>",
      },

      staticText: {
        type: "string",
        default: `
        <div style='border:dashed'>
          <p style='color:blue; font-size:20px'>This is A Paragraph header</p>
          <p>Yo! Cool Story, Bro. I am using backticks to split the html.</p>
        </div>
        `
      },

      favouriteColor: {
        type: "string",
        enum: [
          "Red",
          "Yellow",
          "Orange",
          "Purple" // Add more options as needed
        ],
        title: "<span style='color: red; font-weight: bold;'>Favorite Color</span>",
      },
      favouriteFruits: {
        type: "array",
        items: {
          type: "string",
          enum: ["apples", "bananas", "oranges"]
        },
        uniqueItems: true, // Ensures no duplicate fruits
        title: "Favourite Fruits (check all that apply)"
      },
      description: {
        type: "string",
        title: "Description",
        //I want this to be "textarea" // Multiline text input
      }
    }
  };
  

  
  const uiSchema : UiSchema = {
    description: {
      "ui:widget": "textarea" // Multiline text input
    },
    favouriteSport: {
        "ui:widget": CustomWidget,
    },
    favouriteColor: {
        //"ui:widget": CustomSelectWidget, //you have less control! renders label twice.
        "ui:field": CustomSelectField,
    },
    staticText: {
        "ui:widget": CustomStaticText,
        "ui:options" : {
            label: false
        }
      },
  };
  


export { schema, uiSchema };