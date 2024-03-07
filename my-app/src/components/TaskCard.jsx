import './TaskCard.css'

const TaskCard = (props) =>{
    console.log(props)
  return(
    <div>
         <div className="TaskItem">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p className='text-xl'>{props.dueDate  || props.completeDate}</p>
        <p className='text-xl'>{props.Assignee}</p>
       </div>
       </div>
  );
}


export default TaskCard