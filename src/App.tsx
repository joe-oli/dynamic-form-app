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
import Schema from './Schema';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav className="App-navbar">
          {/* Add your menu items here */}
          <Link to="/">Single Form</Link>
          <Link to="/multi-step-form">Multi-step Form</Link>
          <Link to="/schema">Schema</Link>
        </nav>

        <main className="App-body">
          <Route path="/" exact component={SingleForm} />
          <Route path="/multi-step-form" component={MultiStepForm} />
          <Route path="/schema" component={Schema} />
        </main>
      </div>
    </Router>
  );
};

export default App;
