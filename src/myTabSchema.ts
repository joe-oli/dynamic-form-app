
import { RJSFSchema } from "@rjsf/utils";
import { UiSchema } from "@rjsf/utils";

const schema3: RJSFSchema =  {
  "title": "Assessment Checklist",
  "type": "object",
  "properties": {
    "Tab one": {
      "type": "object",
      "required": [
        "datefeild",
        "assessedtier"
      ],
      "properties": {
        "datefeild": {
          "title": "this is a date field",
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
          "title": "this is assessemnt tier",
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
        }
      }
    },
    "Tab two": {
      "type": "object",
      "required": [
        "sapvendornumber",
        "EquifaxSeacrh"
      ],
      "properties": {
        "sapvendornumber": {
          "title": "Sap Vendor Number",
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
          "title": "Equifax Search",
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
        }
      }
    },
    "Tab three": {
      "type": "object",
      "required": [
        "selectindustryfromdropdownlist"
      ],
      "properties": {
        "selectindustryfromdropdownlist": {
          "title": "Dropdown list",
          "type": "object",
          "properties": {
            "value": {
              "type": "string",
              "enum": [
                "industry1",
                "Indystry4"
              ]
            },
            "notes": {
              "type": "string"
            },
            "instruction_link": {
              "default": "https://www.singledropdnw.com"
            }
          },
          "required": [
            "value"
          ]
        },
        "staticquestion": {
          "type": "string",
          "default": "<div data-wrapper=\"true\" dir=\"ltr\" style=\"font-size:9pt;font-family:'Segoe UI','Helvetica Neue',sans-serif;\"><div><span style=\"font-size:12pt\">this is static content</span></div></div>"
        }
      }
    }
  }
}



const uiSchema3: UiSchema = {
    "Tab one": {
      "datefeild": {
        "ui:field": "CustomDatePicker"
      },
      "assessedtier": {
        "ui:field": "CustomTextField"
      }
    },
    "Tab two": {
      "sapvendornumber": {
        "ui:field": "CustomNumberField"
      },
      "EquifaxSeacrh": {
        "ui:field": "CustomRadioField"
      }
    },
    "Tab three": {
      "selectindustryfromdropdownlist": {
        "ui:field": "CustomDropdownSingle"
      },
      "staticquestion": {
        "ui:widget": "CustomStaticText",
        "ui:options": {
          "label": false
        }
      }
    }
  }
  

  export { schema3, uiSchema3 };
  