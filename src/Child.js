import { useContext } from 'react';
import './App.css';
import ValueContext from './ValueContext';

function Child() {
    let value = useContext(ValueContext);
  return (
    <div>
      Child!!!
      Number: {value}
      <button onClick={()=>{value[1](++value[0])}}>+</button>
    </div>
  );
}

export default Child;
