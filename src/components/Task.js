import React from "react";

function Task(props) {
  const { task, onDelete } = props

  const handleDelete = () => {
    onDelete(task.id)
  }

  return (
    <div className="task" key={task.id}>
    <div className="label">{task.category}</div>
    <div className="text">{task.text}</div>
    <button className="delete" onClick={handleDelete}> X</button>
    </div>
  )
}

export default Task;