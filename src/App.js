import React from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  return (
    <ValueContext.Provider value={1}>
      <div>
        App!!!
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
