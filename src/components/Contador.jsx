import { useReducer, useState } from "react"

const initialState = {contador: 0};

const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
}

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return {contador: state.contador + 1};
    case TYPES.INCREMENT_5:
      return {contador:state.contador + action.payload}
    case TYPES.DECREMENT:
      return {contador: state.contador -1};
      
    default:
      return state;
  }
}

const Contador = () => {
  // const [count, setCount] = useState(0)

  // const sum = () => setCount(count + 1)
  // const dec = () => setCount(count - 1)
  const [state, dispatch] = useReducer(reducer, initialState);
  const sum = () => dispatch({type: "INCREMENT"})
  const dec = () => dispatch({type: "DECREMENT"})
  return (
    <div>
      <h2>contador</h2>
      <nav>
        <button onClick={sum}>+</button>
        <button onClick={dec}>-</button>
      </nav>
      <h3>{state}</h3>
    </div>
  )
}

export default Contador
