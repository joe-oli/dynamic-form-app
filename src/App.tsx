import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SingleForm from './SingleForm';
import MultiStepForm from './MultiStepForm';
import SchemaEditor from './SchemaEditor';

//TODO: later these are loaded as ajax calls.
import { schema as initialSchema, uiSchema as initialUiSchema } from './mySchema2';

import 'bootstrap/dist/css/bootstrap.min.css' //either in here, or 1 level above in index.tsx
import './App.css';

const App: React.FC = () => {

  const [schema, setSchema] = useState(initialSchema);
  const [uiSchema, setUiSchema] = useState(initialUiSchema);

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
          {/* <Route path="/" exact component={SingleForm} /> */}
          <Route path="/" exact render={(props) => <SingleForm {...props} schema={schema} uiSchema={uiSchema} />} />

          <Route path="/multi-step-form" component={MultiStepForm} />
          
          {/* <Route path="/schema" component={Schema} /> */}
          <Route path="/schema" render={(props) => <SchemaEditor {...props} schema={schema} uiSchema={uiSchema} setSchema={setSchema} setUiSchema={setUiSchema} />} />
        </main>
      </div>
    </Router>
  );
};

export default App;
