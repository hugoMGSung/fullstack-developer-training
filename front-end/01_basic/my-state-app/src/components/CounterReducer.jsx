import { useReducer } from "react";  

const initialState = { count: 0, step: 1 };  

function reducer(state, action) {   
  switch (action.type) {     
    case "inc":       
      return { ...state, count: state.count + state.step };     
    case "dec":       
      return { ...state, count: state.count - state.step };     
    case "setStep":       
      return { ...state, step: action.payload };     
    case "reset":       
      return initialState;     
    default:       
      return state;   
  } 
}  

export default function CounterReducer() {   
  const [state, dispatch] = useReducer(reducer, initialState);    

  return (     
    <div>       
      <p>값: {state.count}</p>       
      <label>         
        증가폭         
        <input           
          type="number"           
          value={state.step}           
          onChange={(e) => dispatch({ type: "setStep", payload: Number(e.target.value) })}         
        />       
      </label>       
      <button onClick={() => dispatch({ type: "dec" })}>-</button>       
      <button onClick={() => dispatch({ type: "inc" })}>+</button>       
      <button onClick={() => dispatch({ type: "reset" })}>리셋</button>     
    </div>   
  ); 
}