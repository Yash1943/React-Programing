import React from "react";
import logo from "./logo.svg";

export default function Header(props: { title: string }) {
  //   const welcomeMassage = "welcome to #react-typescript with #tailwind";
  // const DOB = <input type="date" />;
  return (
    <div className="flex gap-2 items-center">
      <img
        src={logo}
        className="animate-spin h-16 w-16"
        alt="logo"
        style={{ animation: "spin 2s linear infinite" }}
      />
      <h1 className="text-center text-xl flex-1">{props.title}</h1>
      
      {/* <input
        type="button"
        value="Submit"
        className="bg-blue-600 m-4 p-3 align-bottom cursor-pointer"
      /> */}
    </div>
  );
}
