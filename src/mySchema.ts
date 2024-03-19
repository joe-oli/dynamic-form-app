import React, { useState } from 'react';
import { withTheme, ThemeProps } from '@rjsf/core';
import { JSONSchema7 } from 'json-schema';
// import 'bootstrap/dist/css/bootstrap.min.css';

const schema: JSONSchema7 = {
  type: "object",
  properties: {
    step1: {
      type: "object",
      title: "Step 1",
      properties: {
        field1: { type: "string", title: "Field 1" },
        field2: { type: "string", title: "Field 2" },
      },
    },
    step2: {
      type: "object",
      title: "Step 2",
      properties: {
        field3: { type: "string", title: "Field 3" },
        field4: { type: "string", title: "Field 4" },
      },
    },
    step3: {
      type: "object",
      title: "Step 3",
      properties: {
        field5: { type: "string", title: "Field 5" },
        field6: { type: "string", title: "Field 6" },
      },
    },
    step4: {
      type: "object",
      title: "Step 4",
      properties: {
        field7: { type: "string", title: "Field 7" },
        field8: { type: "string", title: "Field 8" },
      },
    },
  },
};


export { schema };