import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  let value = useState(1);
  return (
    <ValueContext.Provider value={value}>
      <div>
        App!!!
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
