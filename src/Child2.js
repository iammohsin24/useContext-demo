import { useReducer } from "react";
import numberReducer from "./NumberReducer";

function Child2() {
    let [state, dispatch] = useReducer(numberReducer,20);
  return (
    <div>
      Child2!!! {state}
      <button onClick={()=> {dispatch({type:'increment'})}}>+</button>
      <button onClick={()=> {dispatch({type:'decrement'})}}>-</button>
    </div>
  );
}

export default Child2;
