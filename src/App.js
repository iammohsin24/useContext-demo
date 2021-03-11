import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';

function App() {
  let [ num,setNum] = useState(1);
  return (
    <div>
      App!!!
      <Parent num={num}></Parent>
      <button onClick={()=>setNum(++num)}>Increment Number</button>
    </div>
  );
}

export default App;
