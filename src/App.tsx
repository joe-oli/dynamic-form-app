import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css' //either in here, or 1 level above in index.tsx
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-navbar">
        {/* Add your menu items here */}
        <a href="#">Menu Item 1</a>
        <a href="#">Menu Item 2</a>
        <a href="#">Menu Item 3</a>
      </nav>
      <main className="App-body">
        {/* Add your main content here */}
        <p>Welcome to my app!</p>
      </main>
    </div>
  );
}

export default App;
