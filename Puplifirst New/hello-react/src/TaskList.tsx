const TaskFC = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
    </div>
  );
};

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task key={idx} title={task.title} description={task.description} dueDate={task.dueDate} />
  ));
  return <>{list}</>;
};
