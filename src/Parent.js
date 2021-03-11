import './App.css';
import {useReducer } from 'react';
import Child from './Child';
import Child2 from './Child2';
import numberReducer from './NumberReducer';

function Parent() {
    let [state, dispatch] = useReducer(numberReducer,20);
  return (
    <div>
      Parent!!!
      This wont change: {state}
      <Child></Child>
      <Child2></Child2>
    </div>
  );
}

export default Parent;
