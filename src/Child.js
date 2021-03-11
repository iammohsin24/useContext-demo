import { useContext } from 'react';
import './App.css';
import ValueContext from './ValueContext';

function Child() {
    let value = useContext(ValueContext);
  return (
    <div>
      Child!!!
      Number: {value}
    </div>
  );
}

export default Child;
