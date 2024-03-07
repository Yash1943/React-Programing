import React from "react";
import logo from "../logo.svg";

export default function Home(props: { openFormCB: () => void }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex">
        <img className="animate-spin h-48" src={logo} alt="" />
        <div className="flex-1 flex justify-center items-center h-48">
          <p>welcome to the home page</p>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer"
        onClick={props.openFormCB}>
        Open Form
      </button>
    </div>
  );
}
