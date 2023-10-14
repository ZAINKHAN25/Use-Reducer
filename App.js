import { useReducer } from "react";
import "./styles.css";

function reducer(state, action) {
  if (action.type === "Increament") {
    return state + 1;
  } else if (action.type === "Decreament") {
    return state - 1;
  }
}

export default function App() {
  var [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <h2>{state}</h2>
      <button
        onClick={() => {
          dispatch({ type: "Decreament" });
        }}
      >
        Decreamnet
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Increament" });
        }}
      >
        Increament
      </button>
    </div>
  );
}
