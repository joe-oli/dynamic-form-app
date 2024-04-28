import { RJSFSchema, UiSchema } from "@rjsf/utils";

const schema3: RJSFSchema =  {
  "title": "Assessment Checklist",
  "type": "object",
  "required": [
    "sapvendornumber",
    "EquifaxSeacrh",
    "favoriteFruit"
  ],
  "properties": {
    "datefeild": {
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
          "default": "https://www.datefeild.com"
        }
      },
      "required": [
        "value"
      ]
    },
    "assessedtier": {
      "title": "Q2. sample question label",
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
          "default": "https://www.tetaasjhdgahsgdsad.com"
        }
      },
      "required": [
        "value"
      ]
    },
    "sapvendornumber": {
      "title": "Q3. sample question label",
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
    "EquifaxSeacrh": {
      "title": "Q4. sample question label",
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
    "attachedrequireddocuments": {
      "title": "Q5. sample question label",
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
      "title": "Q7. sample question label",     
      "type": "object",
      "properties": {
        "value": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "option1",
              "option2",
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
    "favoriteFruit": {
      "title": "Select fave fruit",
      "type": "object",
      "properties": {
        "value": {
          "type": "array",
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
          "default": "https://www.multipledropdownlist.com"
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
    "datefeild": {
      "ui:field": "CustomDatePicker"
    },
    "assessedtier": {
      "ui:field": "CustomTextField"
    },
    "sapvendornumber": {
      "ui:field": "CustomNumberField"
    },
    "EquifaxSeacrh": {
      "ui:field": "CustomRadioField"
    },
    "attachedrequireddocuments": {
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
    "staticquestion": {
      "ui:widget": "CustomStaticText",
      "ui:options": {
        "label": false
      }
    }
  }

  export { schema3, uiSchema3 };
