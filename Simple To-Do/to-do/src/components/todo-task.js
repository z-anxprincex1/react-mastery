export const Task = (props) => {

    return (<div className="Task">
    <h1 style={{display: "inline-block"}}>id: {props.taskID} task: {props.taskName}</h1>
    <button style={{marginLeft: "2%", marginRight: "2%"}}
    onClick={() => {
      const id = props.task.id;
      props.setTaskList(props.taskList.filter((task) => {
        return task.id !== id;
      }))
    }}
    >remove</button>
  </div>)
}