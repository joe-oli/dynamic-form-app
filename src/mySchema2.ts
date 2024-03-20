import {RJSFSchema} from '@rjsf/utils'
import { UiSchema } from '@rjsf/utils'
// import  {JSONSchema7}  from 'json-schema';

/*
import CustomField from './CustomField';
import CustomWidget from './CustomWidget';
import CustomSelectWidget from './CustomSelectWidget';
*/

/* moved to SimpleForm.tsx; and made it into a string below "CustomSelectField", "CustomStaticText"
import CustomSelectField from './CustomSelectField';
import CustomStaticText from './CustomStaticText';
*/

const schema: RJSFSchema = {
    title: "User Information", //fieldset-Legend
    type: "object",
    required: ["firstName", "lastName", "checkboxGroup", "IAgreeCheckbox", "address"], // These fields are mandatory;
    /* NB: "IAgreeCheckbox" required will work first time (prop does not exist in schema);
      ; but once you check (first time prop gets created 'true'; next time it will be 'false', but the prop will still exist;
      ;SO for checkbox, 'required' really means MUST BE TRUE.(see setting in individual field, const=true)
    */
    properties: {
      firstName: {
        title: "First Name",
        type: "string",
        minLength: 2, //setting min,max (Length)
        maxLength:20,
        pattern: "^[A-Za-z'-]*$" // alpha, including apostrophes (O'Donell), and hyphens (Mary-Jane)
      },
      lastName: {
        title: "Last Name",
        type: "string",
        pattern: "^[A-Za-z'-]*$" // alpha, including apostrophes (O'Donell), and hyphens (Mary-Jane)
      },
      address: { //mix of JS object and strict-JSON
        "type": "object",
        "title": "Address",
        "properties": {
          "street": {
            "type": "string",
            "title": "Street"
          },
          "city": {
            "type": "string",
            "title": "City"
          },
          "state": {
            "type": "string",
            "title": "State"
          },
          "postcode": {
            "type": "string",
            "title": "Postcode"
          }
        },
        required: [
          "street",
          "city",
          "state",
          "postcode"
        ]
      },
      age: {
        title: "Age",
        type: "number",
        minimum:18, //setting min,max
        maximum:100
      },
      dob: {
        title: "Q4. Date of Birth",
        type: "string",
        format: "date",
        pattern: "^(19[0-9]{2}|200[0-9]|201[0-9]|202[0-4])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$" ,
        //RegEx - allows dates from 1900-01-01 to 2024-12-31; Not ideal, assumes all months have 31 days, use validate_fn; 
      },
//Single-select DROPDOWN; uses UI-SCHEMA for the HTML rendering !
      favouriteSport: {
        title: "<span style='color: darkgreen; font-weight: bold;'>What Is Your preferred sport?</span>",
        type: "string",
        enum: [
          "Basketball",
          "Football",
          "Tennis",
          "Other" // Add more options as needed
        ],
      },

      staticText: {
        type: "string",
        default: `
        <div style='border:dashed;padding:5px;'>
          <p style='color:steelblue; font-size:20px'>This is A Paragraph header</p>
          <p>Yo! Cool Story, Bro. I am using backticks to split the html.</p>
        </div>
        `
      },
      favouriteColor: {
        title: "<span style='color: orange; font-weight: bold;'>Favorite Color</span>",
        type: "string",
        enum: [
          "Red",
          "Yellow",
          "Orange",
          "Purple" // Add more options as needed
        ],
      },
//multi-select DROPDOWN
      favouriteFruits: {
        title: "Favourite Fruits (check all that apply)",
        type: "array",
        items: {
          type: "string",
          enum: ["apples", "bananas", "oranges"]
        },
        uniqueItems: true, // Ensures no duplicate fruits
      },
//single-select DROPDOWN; NO UI-SCHEMA
      singleSelectDropdown: {
        title: "Single Select Dropdown",
        type: "string",
        enum: ["Option 1", "Option 2", "Option 3"]
      },
      checkboxGroup: {
        title: "Checkbox Group",
        type: "array",
        items: {
          type: "string",
          enum: ["Option 1", "Option 2", "Option 3", "Option 4"]
        },
        uniqueItems: true
      }, 
      radioButtonGroup: {
        title: "Radio Button Group",
        type: "string",
        enum: ["Option 1", "Option 2", "Option 3"]
      },

      description: {
        title: "Description",
        type: "string",
        //I want this to be "textarea" // Multiline text input
      },
      //single-checkbox:
      IAgreeCheckbox: {
        title: "I Agree with All the above",
        type: "boolean",
        const: true // This means the value must be `true` (perfect in this case to make it mandatory)
      }
    }
  };
  

  
  const uiSchema : UiSchema = {
    description: {
      "ui:widget": "textarea" // Multiline text input; if omitted, just a simple textbox.
    },
    favouriteSport: {
      "ui:field": "CustomSelectField",
    },
    favouriteColor: {
      "ui:field": "CustomSelectField",
            //"ui:widget": CustomSelectWidget, //you have less control! renders label twice.
    },
    staticText: {
      "ui:widget": "CustomStaticText",
      "ui:options" : {
          label: false
      }
    },
    checkboxGroup: {
      "ui:widget": "checkboxes" //remove the uiSchema for checkboxGroup to get a Multi-select dropdown
    },
    radioButtonGroup: {
      "ui:widget": "radio"
    }
  };
  


export { schema, uiSchema };