import { useState } from "react";
import "./index.css";

function App() {
  const [title, setTitle] = useState("This is class base Components");
  console.log(title, "CurrentState");
  function changeValue() {
    setTitle("Hooks is invoked");
  }
  return (
    <div className="px-32 pt-[13rem] my-20">
      <div>State Value:{title}</div>
      <button className="bg-green-400 m-4 p-3" onClick={changeValue}>
        Click the Button
      </button>
    </div>
  );
}

export default App;
