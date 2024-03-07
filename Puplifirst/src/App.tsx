import { useState } from "react";
import React from "react";
import Header from "./Header";
import AppContainer from "./AppContainer";
import Home from "./components/Home";
import { Form } from "./components/Form";

function App() {
  // const spinStyle = { animation: "spin 2s linear infinite" };
  const [state, setstate] = useState("Home");

  const openForm = () => {
    setstate("FORM");
  };

  const closeForm = () => {
    setstate("HOME");
  };
  return (
    <AppContainer>
      <div className="p-4 mx-auto bg-white shadow-lg rounded-xl">
        <Header title="welcome to #react-typescript with #tailwind" />
        {state === "Home" ? <Home openFormCB={openForm} /> : <Form closeFormCB={closeForm} />}
      </div>
    </AppContainer>
  );
}

export default App;
