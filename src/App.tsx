import { useReducer } from 'react';
import './App.css';

// interface MyButtonProps {
//   title: string;
//   disabled: boolean;
// }

interface State {
  count: number
}


type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}
// // Explicitly set the type to "boolean"
// const [enabled, setEnabled] = useState<boolean>(false);

// type Status = "idle" | "loading" | "success" | "error";

// const [Status, setStatus] = useState<Status>("idle");

// type RequestState =
//   | { status: "idle" }
//   | { status: "loading" }
//   | { status: "success", data: any }
//   | { status: "error", error: Error };

// const [requestState, setRequestState] = useState<RequestState>({ status: "idle" });

// function MyButton({ title, disabled }: MyButtonProps) {
//   return (
//     <button disabled={disabled}>{title}</button>
//   );
// }

export default function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });
  return (
    <div>
      <h1>Welcome to my counter</h1>
      <p>Count:{state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
