import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const divContainer = (
//   <div className="flex h-screen bg-gray-100 items-center justify-center">
//     <h1 id="heading" className="text-xl text-center py-4">
//       Hello World
//     </h1>
//   </div>
// );

// ReactDOM.render(divContainer, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // divContainer
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
