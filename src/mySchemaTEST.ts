import { RJSFSchema, UiSchema } from "@rjsf/utils";

const schema3: RJSFSchema =  {
  "title": "My nested fields",
  "type": "object",
  "required": [
    "IAgree",
    "yesNoQuestion",
    "myDateField",
    "favoriteSports",
    "favoriteFruit",
    "multipleselectdropdown",
    "sapVendorNumber",
    "personFullName",
    "multiLineDescription"
  ],
  "properties": {
    "myDateField": {
      "title": "Q1. sample question label",
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
          "default": "http://www.timeanddate.com"
        }
      },
      "required": [
        "value"
      ]
    },
    "personFullName": {
      "title": "Full name",
      "type": "object",
      "properties": {
        "value": {
          "type": "string",
          "minLength": 2,
          "maxLength": 20,
          "pattern": "^[A-Za-z]{1}[A-Za-z '-]*[A-Za-z]{1}$" //e.g. Mary-Rose O'Conner; replace asterisk(*) with plus(+) if at least one char in the middle is required
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default": "https://www.smh.com.au"
        }
      },
      "required": [
        "value"
      ]
    },
    "multiLineDescription": {
      "title": "Some random long description",
      "type": "object",
      "properties": {
        "value": {
          "type": "string",
          "minLength": 3,
          "maxLength": 3600,
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default": "https://www.example.com"
        }
      },
      "required": [
        "value"
      ]
    },    
    "sapVendorNumber": {
      "title": "Q3. SAP Vendor No.",
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
          "default": "https://www.google.com"
        }
      },
      "required": [
        "value"
      ]
    },
    "yesNoQuestion": {
      "title": "Q4. Yes No Radio button",
      "type": "object",
      "properties": {
        "value": {
          "type": "string",
          "enum": [
            "Yes",
            "No"
          ]
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default": "https://www.asic.com"
        }
      },
      "required": [
        "value"
      ]
    },
    "IAgree": {
      "title": "I Agree to the conditions",
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
          "default": "https://www.checkbox.com"
        }
      },
      "required": [
        "value"
      ]
    },
    "industrySingleDropdown": {
      "title": "Q6. Select industry from the list",
      "type": "object",
      "properties": {
        "value": {
          "type": "string",
          "enum": [
            "industry 1",
            "industry 2",
            "industry 3",
          ]
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default": "https://www.example.com"
        }
      },
      "required": [
        "value"
      ]
    },
    "multipleselectdropdown": {
      "title": "Q7. Dropdown Multi-select",     
      "type": "object",
      "properties": {
        "value": {
          "type": "array",
          "minItems" : 1, //for Array, required means empty-array [] is acceptable
          "items": {
            "type": "string",
            "enum": [
              "option 1",
              "option 2",
            ]
          },
          "uniqueItems": true
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default": "https://www.multipledropdownlist.com"
        }
      },
      "required": [
        "value"
      ]
    },
    "favoriteSports": {
      "title": "Favorite Sports",
      "type": "array",
      "minItems" : 1, //for Array, required means empty-array [] is acceptable
      "items": {
        "type": "string",
        "enum": [
          "soccer",
          "hockey",
          "baseball",
          "basketball"
        ]
      },
      "uniqueItems": true
    },
    "favoriteFruit": {
      "title": "Select fave fruit",
      "type": "object",
      "properties": {
        "value": {
          "type": "array",
          "minItems" : 1, //for Array, required means empty-array [] is acceptable
          "items": {
            "type": "string",
            "enum": [
              "apples",
              "oranges",
              "bananas"
            ]
          },
          "uniqueItems": true
        },
        "notes": {
          "type": "string"
        },
        "instruction_link": {
          "default": "https://www.example.com"
        }
      },
      "required": [
        "value"
      ]
    },
    "staticquestion": {
      "type": "string",
      "default": "<div>this is static content</div>"
    }
  }
}


const uiSchema3: UiSchema = {
    "myDateField": {
      "ui:field": "CustomDatePicker"
    },
    "personFullName": {
      "ui:field": "CustomTextField"
    },
    "multiLineDescription" : {
      "ui:field": "CustomTextMulti"
    },   
    "sapVendorNumber": {
      "ui:field": "CustomNumberField"
    },
    "yesNoQuestion": {
      "ui:field": "CustomRadioField"
    },
    "IAgree": {
      "ui:field": "CustomCheckboxSingle"
    },
    "industrySingleDropdown": {
      "ui:field": "CustomDropdownSingle"
    },
    "multipleselectdropdown": {
      "ui:field": "CustomDropdownMulti"
    },
    "favoriteFruit": {
      "ui:field": "CustomCheckboxGroup"
    },
    "favoriteSports": {
      "ui:widget": "checkboxes"
    },    
    "staticquestion": {
      "ui:widget": "CustomStaticText",
      "ui:options": {
        "label": false
      }
    }
  }

  export { schema3, uiSchema3 };
