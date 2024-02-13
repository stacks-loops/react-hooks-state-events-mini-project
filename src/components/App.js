import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

      const handleDelete = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId)
          setTasks(updatedTasks);
  }

        const handleCategorySelect = (category) => {
        setSelectedCategory(category)
  }

        const handleTaskFormSubmit = (newTask) => {
          const newTaskWithCategory = {
            ...newTask,
            category: selectedCategory,
    };
      setTasks([...tasks, newTaskWithCategory])
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelect={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  )
}

export default App;
