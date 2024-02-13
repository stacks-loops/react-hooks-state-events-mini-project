import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks, onDelete } = props

  const handleDelete = (taskId) => {
    console.log("deleting", taskId)
    onDelete(taskId)
  }

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  )
}

export default TaskList;
