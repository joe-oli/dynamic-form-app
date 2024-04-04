import { RJSFSchema } from "@rjsf/utils";
import { UiSchema } from "@rjsf/utils";


const schema3: RJSFSchema = {
  "title": "Assessment Checklist",
  "type": "object",
  "required": [
    "sapvendornumber",
    "EquifaxSeacrh",
    "attachedrequireddocuments",
    "selectindustryfromdropdownlist",
    "multipleselectdropdown"
  ],
  "properties": {
    "assessedtier": {
      "title": "<div data-wrapper=\"true\" dir=\"ltr\"><div><span style=\"color:rgba(0, 0, 0, 0.87); font-family:SegoeUI, Segoe UI\"><span style=\"background-color:#ffffff; font-size:16px\">Assed Tier asdasdasdasd ?</span></span></div></div>",
      "type": "object",
       "properties": {
        "value": {
          "type": "string",
          "minLength": 5,
          "maxLength": 10,
          "pattern": "^[A-Za-z'-]*$"
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default": "https://austrade.sharepoint.com/sites/clientprograms/SitePages/What-is-a-High-Risk-industry-.aspx"
        }
      },
      "required": ["value"]
    },
    "sapvendornumber": {
      "title": "<div data-wrapper=\"true\" dir=\"ltr\" style=\"font-size:9pt;font-family:'Segoe UI','Helvetica Neue',sans-serif;\"><div><span style=\"font-size:12pt\"><span style=\"background-color:#ffffff; color:rgba(0, 0, 0, 0.87); display:inline !important; float:none; font-family:SegoeUI,&quot;Segoe UI&quot;; font-style:normal; font-weight:400; letter-spacing:normal; text-align:left; text-decoration-color:initial; text-decoration-style:initial; text-decoration-thickness:initial; text-indent:0px; text-transform:none; text-wrap:wrap; word-spacing:0px\">1. Enter SAP Vendor Number</span></span></div></div>",
      "type": "object",
      "properties": {
        "value": {
          "type": "number",
          "minimum": 2,
          "maximum": 20
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default":  "https://www.google.com"
        }
      },
      "required": ["value"]
    },
    "EquifaxSeacrh": {
      "title": "<div data-wrapper=\"true\" dir=\"ltr\" style=\"font-size:9pt;font-family:'Segoe UI','Helvetica Neue',sans-serif;\"><div><span style=\"font-size:12pt\">Q3. If this is the applicant's first application, have you uploaded the comprehensive (current and historical) Equifax search?</span></div></div>",
      "type": "object",
      "properties": {
        "value": {
          "type": "string",
          "enum": ["Yes", "No"]
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default":  "https://www.asic.com"
        }
      },
      "required": ["value"]
    },
    "attachedrequireddocuments": {
      "title": "<div data-wrapper=\"true\" dir=\"ltr\" style=\"font-size:9pt;font-family:'Segoe UI','Helvetica Neue',sans-serif;\"><div><span style=\"font-size:12pt\">Q4. The applicant uploaded the required documents during the application process</span></div>\n<ul><li style=\"list-style-position: inside;\"><span style=\"font-size:12pt\">Application form PDF</span></li><li style=\"list-style-position: inside;\"><span style=\"font-size:12pt\">Balance sheet</span></li><li style=\"list-style-position: inside;\"><span style=\"font-size:12pt\">Profit and Loss statement</span></li></ul></div>",
      "type": "object",
      "properties": {
        "value": {
          "type": "boolean",
          "const": true
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default":  "https://www.checkbox.com"
        }
      },
      "required": ["value"]
    },
    "selectindustryfromdropdownlist": {
      "title": "<div data-wrapper=\"true\" dir=\"ltr\" style=\"font-size:9pt;font-family:'Segoe UI','Helvetica Neue',sans-serif;\"><div><span style=\"font-size:12pt\">Q. Select industry from the list</span></div></div>",
      "type": "object",
      "properties": {
        "value": {
          "type": "string",
          "enum": ["industry1", "indystry2", "industry3", "Indystry4"]
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default":  "https://www.singledropdnw.com"
        }
      },
      "required": ["value"]
    },
    "multipleselectdropdown": {
      "title": "<div data-wrapper=\"true\" dir=\"ltr\" style=\"font-size:9pt;font-family:'Segoe UI','Helvetica Neue',sans-serif;\"><div><span style=\"font-size:12pt\">Q. Select multiple options from the list</span></div></div>",
      "type": "object",
      "properties": {
        "value": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "option 1",
              "option 2",
              "option 3",
              "option 4",
              "option 5",
              "option 6",
              "option 7",
              "option 8"
            ]
          },
          "uniqueItems": true //ensure no duplicates in items.
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default":  "https://www.multipledropdownlist.com"
        }
      },
      "required": ["value"]
    },
    "myCheckboxGroup": {
      "title": "<div data-wrapper=\"true\" dir=\"ltr\" style=\"font-size:9pt;font-family:'Segoe UI','Helvetica Neue',sans-serif;\"><div><span style=\"font-size:12pt\">Q. Select multiple options from the list</span></div></div>",
      "type": "object",
      "properties": {
        "value": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "apples",
              "oranges",
              "bananas",
            ]
          }
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default":  "https://www.checkboxgroup.com"
        }
      },
      "required": ["value"]
    },
    "myTextboxMulti": {
      "title": "<div data-wrapper=\"true\" dir=\"ltr\" style=\"font-size:9pt;font-family:'Segoe UI','Helvetica Neue',sans-serif;\"><div><span style=\"font-size:12pt\">Q. Enter your comments</span></div></div>",
      "type": "object",
      "properties": {
        "value": {
          "type": "string"
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default":  "https://www.textarea.com"
        }
      },
      "required": ["value"]
    },
    "myDateField": {
      "title": "<div data-wrapper=\"true\" dir=\"ltr\" style=\"font-size:9pt;font-family:'Segoe UI','Helvetica Neue',sans-serif;\"><div><span style=\"font-size:12pt\">Q. Select a date</span></div></div>",
      "type": "object",
      "properties": {
        "value": {
          "type": "string",
          "format": "date"
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default":  "https://www.datepicker.com"
        }
      },
      "required": ["value"]
    },
    
    "textblock1": {
      "type": "string",
      "default": "<div data-wrapper=\"true\" dir=\"ltr\" style=\"font-size:18pt;font-family:'Segoe UI','Helvetica Neue',sans-serif;\"><div><span style=\"font-size:12pt;color:hotpink;\">this is static content</span></div></div>"
    }
  }
}




const uiSchema3: UiSchema = {
  "assessedtier": {
    "ui:field": "CustomTextField",
    },
    "sapvendornumber" : {
      "ui:field" : "CustomNumberField"
    },
    "EquifaxSeacrh" : {
      "ui:field" : "CustomRadioField"
    },
    "attachedrequireddocuments" : {
      "ui:field" : "CustomCheckboxSingle"
    },
    "selectindustryfromdropdownlist" : {
      "ui:field" : "CustomDropdownSingle"
    },
    "multipleselectdropdown" : {
      "ui:field" : "CustomDropdownMulti"
    },
    "myCheckboxGroup" : {
      "ui:field" : "CustomCheckboxGroup"
    },
    "myTextboxMulti" : {
      "ui:field" : "CustomTextMulti"
    },
    "myDateField" : {
      "ui:field" : "CustomDatePicker"
    },
    "textblock1": {
      "ui:widget": "CustomStaticText",
      "ui:options": {
        "label": false
      }
    }
  }



// This was used when the schema had no nesting (No instruction_link, No notes).
const uiSchemaXXX: UiSchema = {
  description: {
    "ui:widget": "textarea", // Multiline text input; if omitted, just a simple textbox.
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
    "ui:options": {
      label: false,
    },
  },
  checkboxGroup: {
    "ui:widget": "checkboxes", //remove the uiSchema for checkboxGroup to get a Multi-select dropdown
  },
  radioButtonGroup: {
    "ui:widget": "radio",
  },
};

export { schema3, uiSchema3 };
