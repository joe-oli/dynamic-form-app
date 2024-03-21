import React, { useState } from 'react';
import Form from '@rjsf/core'
import {RJSFSchema} from '@rjsf/utils'

import { withTheme } from '@rjsf/core';
import {Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4'

import { schema, uiSchema } from './mySchema2'; //it will actually import mySchema.js (NOT .ts)
// import { JSONSchema7 } from 'json-schema';
import AjvValidator from '@rjsf/validator-ajv8';

import 'bootstrap/dist/css/bootstrap.min.css' //either in here, or 1 level above in index.tsx
import './App.css';

// const Form = withTheme(Bootstrap4Theme)



import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SingleForm from './SingleForm';
import MultiStepForm from './MultiStepForm';
import MyDatepickerExample from './MyDatepickerExample';

const App: React.FC = () => {

  //last year at 10:00 AM
  const initPropRow = {
    ActualExecPeriodStartDate: "2023-01-01",
    ActualExecPeriodStartTime: "1970-01-01T10:00:00" //in JS, we cannot have a Timeonly object, so fix it to Unix Epoch time.
  };


  return (
    <Router>
      <div className="App">
        <nav className="App-navbar">
          {/* Add your menu items here */}
          <Link to="/">Single Form</Link>
          <Link to="/multi-step-form">Multi-step Form</Link>
          <Link to="datepicker-example">Datepicker Example</Link>
        </nav>

        <main className="App-body">
          <Route path="/" exact component={SingleForm} />
          <Route path="/multi-step-form" component={MultiStepForm} />

          {/* <Route path="/datepicker-example" component={MyDatepickerExample} /> */}
          <Route path="/datepicker-example" render={(props) => <MyDatepickerExample {...props} propRow={initPropRow} />} />
        </main>
      </div>
    </Router>
  );
};

export default App;
