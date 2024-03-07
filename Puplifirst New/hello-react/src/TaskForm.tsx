import React, { useState } from "react";

Interface TaskFormProps{
  addTask: (task: taskItem) => void
}
interface TaskFormState {
  title: String;
  description: String;
  dueDate?: String;
}

const TaskForm = (props) => {
  const [formState, setFormState] =
    React.useState <
    TaskFormState >
    {
      title: "",
      description: "",
      dueDate: "",
    };
  const titleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value }); //...Spared Opreator use for spread the title and etc in the form
  };
  const descriptionChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value }); //...Spared Opreator use for spread the title and etc in the form
  };
  const dueDateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value }); //...Spared Opreator use for spread the title and etc in the form
  };
  const addTask: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    console.log("Submit the Form with");
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", description: "", dueDate: "" }); //...Spared Opreator use for spread the title and etc in the form
  };
  return (
    <>
      <form onSubmit={addTask}>
        <div>
          <div>
            <input
              type="text"
              name="todoTitle"
              id="todoTitle"
              value={formState.title}
              className=""
              onChange={titleChange}
            />
            <label htmlFor="todoTitle" className="">
              todo Title
            </label>
          </div>
          <div>
            <input
              type="text"
              name="todoDescription"
              id="todoDescription"
              value={formState.description}
              onChange={descriptionChange}
              className=""
            />
            <label htmlFor="todoDescription" className="">
              Description
            </label>
          </div>
          <div>
            <input
              type="text"
              name="dueDate"
              id="dueDate"
              value={formState.dueDate}
              onChange={dueDateChange}
            />
            <label htmlFor="dueDate">dueDate</label>
          </div>
          <div>
            <button type="submit" className="p-4 m-3">
              Add Item
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
