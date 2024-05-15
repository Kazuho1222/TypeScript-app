import { useState } from 'react';
import './App.css';

interface MyButtonProps {
  title: string;
  disabled: boolean;
}

// Explicitly set the type to "boolean"
const [enabled, setEnabled] = useState<boolean>(false);

type Status = "idle" | "loading" | "success" | "error";

const [Status, setStatus] = useState<Status>("idle");

type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success", data: any }
  | { status: "error", error: Error };

const [requestState, setRequestState] = useState<RequestState>({ status: "idle" });

function MyButton({ title, disabled }: MyButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a disabled button" disabled={true} />
    </div>
  );
}
