import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //Hooks using update or change the value in UI

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter <= 19) 
    counter = counter + 1;
    setCounter(counter);
    console.log(counter);
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
  };

  //let counter = 15

  const removeValue = () => {
    if (counter >= 1)
     counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
