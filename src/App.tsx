import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SingleForm from './SingleForm';

import MultiStepForm from './MultiStepForm';
import DataEntryBS from './DataEntryBS';

import SchemaEditor from './SchemaEditor';

//TODO: later these are loaded as ajax calls.
import { schema as initialSchema, uiSchema as initialUiSchema } from './mySchema2';
import { schema3 as initialSchema3, uiSchema3 as initialUiSchema3 } from './mySchemaTEST';

import 'bootstrap/dist/css/bootstrap.min.css' //either in here, or 1 level above in index.tsx
import './App.css';

const App: React.FC = () => {

  //this is for SimpleForm.tsx
  const [schema, setSchema] = useState(initialSchema);
  const [uiSchema, setUiSchema] = useState(initialUiSchema);

  //this is for DataEntryBS.tsx
  const [schema3, setSchema3] = useState(initialSchema3);
  const [uiSchema3, setUiSchema3] = useState(initialUiSchema3);

  return (
    <Router>
      <div className="App">
        <nav className="App-navbar">
          {/* Add your menu items here */}
          <Link to="/">Single Form</Link>
          <Link to="/multi-step-form">Multi-step Form</Link>
          <Link to="/dataentry-bs">Data-entry (BS)</Link>
          <Link to="/schema">Schema</Link>
        </nav>

        <main className="App-body">
          {/* <Route path="/" exact component={SingleForm} /> */}
          <Route path="/" exact render={(props) => <SingleForm {...props} schema={schema} uiSchema={uiSchema} />} />

          <Route path="/multi-step-form" component={MultiStepForm} />

          {/* <Route path="/dataentry-bs" component={DataEntryBS} /> */}
          <Route path="/dataentry-bs" render={(props) => <DataEntryBS {...props} schema={schema3} uiSchema={uiSchema3} />} />
          
          {/* <Route path="/schema" component={Schema} /> */}
          <Route path="/schema" render={(props) => <SchemaEditor {...props} schema={schema} uiSchema={uiSchema} setSchema={setSchema} setUiSchema={setUiSchema} />} />
        </main>
      </div>
    </Router>
  );
};

export default App;
