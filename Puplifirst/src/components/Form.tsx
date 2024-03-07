import React, { useState, useEffect } from "react";
import LabelledInput from "../LabelledInput";

interface formField {
  id: number;
  label: string;
  FieldType: string;
  value: string;
}

const intialFormFields: formField[] = [
  {
    id: 1,
    label: "First Name",
    FieldType: "text",
    value: "",
  },
  {
    id: 2,
    label: "Last Name",
    FieldType: "text",
    value: "",
  },
  {
    id: 3,
    label: "Email",
    FieldType: "email", // Use "email" type for email input
    value: "",
  },
  {
    id: 4,
    label: "Date of Birth",
    FieldType: "date", // Use "date" type for Date of Birth input
    value: "",
  },
  {
    id: 5,
    label: "Phone Number",
    FieldType: "tel", // Use "tel" type for Phone Number input
    value: "",
  },
];

const intialstate: () => formField[] = () => {
  const formFieldsJSON = localStorage.getItem("formFields");
  const persistentFormFields = formFieldsJSON ? JSON.parse(formFieldsJSON) : intialFormFields;
  return persistentFormFields;
};

const SaveFormData = (currentState: formField[]) => {
  localStorage.setItem("FormFiled", JSON.stringify(currentState));
};

export function Form(props: { closeFormCB: () => void }) {
  const [state, setstate] = useState(intialstate());
  const [newField, setNewfield] = useState("");
  useEffect(() => {
    console.log("Component mounted");
    const oldtitle = document.title;
    document.title = "Form Editor";

    return() =>{
      document.title = "React App"
    }
  }, []);
  const addFields = () => {
    //Asychronous Nature of state Updates
    //Always manage The state as if it's unmutable

    console.log("addField", state.length);
    setstate([
      //Queues a trigger
      ...state,
      {
        id: Number(new Date()),
        label: newField,
        FieldType: "text",
        value: "",
      },
    ]);
    // setstate((state) => [...state]); //At the Time Trigger
    setNewfield("");
    // setNewfield("New Value");
    // console.log("After AddField", state.length);
  };
  const removeField = (id: number) => {
    setstate(state.filter((field) => field.id !== id));
  };

  return (
    <div className="flex flex-col gap-2 p-4 divide-y-2 divide-dotted">
      <div className="p-3 m-2">
        {state.map((field) => (
          <LabelledInput
            key={field.id}
            id={field.id}
            label={field.label}
            fieldType={field.FieldType}
            removeFieldCB={removeField}
          />
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="border-2 border-gray-200 rounded-lg p-2 my-2 flex-1"
          value={newField}
          onChange={(e) => {
            setNewfield(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 m-4 rounded-lg cursor-pointer"
          onClick={addFields}>
          Add New Fields
        </button>
      </div>
      <div className="flex m-1 p-2 gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer"
          onClick={(_) => SaveFormData(state)}>
          Submit
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer"
          onClick={props.closeFormCB}>
          close Form
        </button>
      </div>
    </div>
  );
}
